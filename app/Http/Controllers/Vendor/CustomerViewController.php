<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Booking;
use App\Models\Payment;

class CustomerViewController extends Controller
{
    public function index()
    {
        $vendor = Auth::guard('vendor')->user();

        // Retrieve bookings along with associated futsal and user data
        $booking_list = Booking::whereHas('futsalListings', function ($query) use ($vendor) {
            $query->where('vendor_id', $vendor->id);
        })
            ->with('futsalListings', 'user')
            ->paginate(15);

        return Inertia::render('Vendor/Court/BookedCourts/index', [
            'booking_list' => $booking_list,
        ]);
    }

    public function refund()
    {
        $vendor = Auth::guard('vendor')->user();

        // Retrieve the canceled payments related to the vendor's futsal listings
        $refundRequests = Payment::with('user') // Eager load the user information
            ->whereHas('booking.futsalListings', function ($query) use ($vendor) {
                $query->where('vendor_id', $vendor->id);
            })
            ->where('is_cancelled', true)
            ->paginate(15);

        return Inertia::render('Vendor/Court/RefundRequest/index', [
            'refundRequests' => $refundRequests,
        ]);
    }
}
