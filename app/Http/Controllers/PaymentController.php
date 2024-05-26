<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\Booking;
use App\Models\TimeSlot;
use Illuminate\Support\Facades\Redirect;
use App\Models\Payment;
use Illuminate\Support\Facades\DB;
use App\Models\VendorPayment;
use Illuminate\Support\Facades\Mail;
use App\Mail\ConfirmBookingMail;

class PaymentController extends Controller
{
    public function verify(Request $request)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Key ' . env('KHALTI_SECRET_KEY'),
        ])->post('https://khalti.com/api/v2/payment/verify/', [
            'token' => $request->token,
            'amount' => $request->amount,
        ]);
        if ($response->successful()) {
            DB::beginTransaction();
            try {
                $user = Auth::user();
                $futsal_listing_id = $request->id;
                $user_id = Auth::id();
                $time_slot = TimeSlot::where('futsal_listings_id', $futsal_listing_id)
                    ->where('day', $request->day)
                    ->first();
                $time_slot_id = $time_slot ? $time_slot->id : null; // Ensure there's a fallback or handle the case when no slot is found
                $times = explode('-', $request->time_slot);
                $startTime = date('H:i:s', strtotime(trim($times[0])));
                $endTime = date('H:i:s', strtotime(trim($times[1])));

                $booking = Booking::create([
                    'futsal_listings_id' => $futsal_listing_id,
                    'user_id' => $user_id,
                    'time_slot_id' => $time_slot_id,
                    'start_time' => $startTime,
                    'end_time' => $endTime,
                    'booking_date' => $request->booking_date,
                    'duration' => $request->interval,
                    'total_price' => $request->total_price,
                    'day' => $request->day,
                    'is_confirmed' => true,
                    'is_cancelled' => false,
                    'is_paid' => true,
                ]);
                // Create the payment
                $payment = Payment::create([
                    'booking_id' => $booking->id,
                    'user_id' => $user_id,
                    'transaction_id' => $response->json('idx'), // assuming 'idx' is the transaction ID in the response
                    'amount' => $request->amount,
                ]);

                // Update the booking with the payment_id
                $booking->update(['payment_id' => $payment->id]);

                // Update the vendor's payment balance
                $vendor = $booking->futsalListings->vendor; // assuming you have a relationship set up
                $vendorPayment = VendorPayment::firstOrNew(['vendor_id' => $vendor->id]);
                $vendorPayment->amount_due += $request->amount;
                $vendorPayment->save();
                Mail::to($user->email)->send(new ConfirmBookingMail($booking->booking_date, $booking->start_time, $booking->end_time, $booking->total_price, $booking->day, $booking->duration, $booking->futsalListings->title, $user->firstName));
                DB::commit();

                return Redirect::route('payment.success', ['booking_id' => $booking->id])->with('success', 'Booking added successfully!');
            } catch (\Exception $e) {
                DB::rollBack();
                Log::error($e->getMessage());
                return response()->json(['success' => false, 'message' => 'Payment failed!', 'details' => $e->getMessage()], 422);
            }
        } else {
            // Include more detailed error handling as needed
            return response()->with(['success' => false, 'message' => 'Payment failed!', 'details' => $response->json()], 422);
        }
    }

    public function success($booking_id)
    {
        return Inertia::render('Payment/PaymentSuccess', [
            'booking_id' => $booking_id,
        ]);
    }

    public function details($id)
    {
        $booking = Booking::with(['futsalListings', 'user', 'payment'])->findOrFail($id);

        return Inertia::render('Customer/Booking/BookingDetails/index', [
            'booking' => $booking,
        ]);
    }

    public function cancelBooking(Request $request)
    {
        DB::beginTransaction();

        try {
            $booking = Booking::findOrFail($request->id);

            // Check if the booking belongs to the authenticated user
            if ($booking->user_id !== Auth::id()) {
                return response()->json(['success' => false, 'message' => 'Unauthorized'], 403);
            }

            // Update booking and payment to be cancelled
            $booking->is_cancelled = true;
            $booking->save();

            if ($booking->payment) {
                $booking->payment->is_cancelled = true;
                $booking->payment->save();
            }

            DB::commit();

            return Redirect::route('booking.details', ['booking_id' => $booking->id])->with('success', 'Booking cancelled successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error($e->getMessage());
            return response()->json(['success' => false, 'message' => 'Cancellation failed!', 'details' => $e->getMessage()], 422);
        }
    }

    public function markAsRefunded(Request $request)
    {
        DB::beginTransaction();

        try {
            $payment = Payment::findOrFail($request->id);

            // Check if the payment is related to the vendor's futsal listings
            $vendor = Auth::guard('vendor')->user();
            if ($payment->booking->futsalListings->vendor_id !== $vendor->id) {
                return response()->json(['success' => false, 'message' => 'Unauthorized'], 403);
            }

            // Mark the payment as refunded
            $payment->is_refunded = true;
            $payment->save();

            DB::commit();

            return response()->json(['success' => true, 'message' => 'Payment marked as refunded successfully']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error($e->getMessage());
            return response()->json(['success' => false, 'message' => 'Failed to mark payment as refunded', 'details' => $e->getMessage()], 422);
        }
    }
}
