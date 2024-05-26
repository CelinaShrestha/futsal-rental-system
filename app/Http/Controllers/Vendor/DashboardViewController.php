<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Booking;
use Carbon\Carbon;
use App\Models\Payment;

class DashboardViewController extends Controller
{
    public function index()
    {
        $vendor = Auth::guard('vendor')->user();
        $today = Carbon::today();

        // Get the total number of bookings directly from the Booking model
        $totalBookings = Booking::whereIn('futsal_listings_id', $vendor->futsalListings->pluck('id'))->where('booking_date', '>=', $today)->count();

        $FutsalCount = $vendor->futsalListings->count();
        $customerCount = $vendor->futsalListings->flatMap->bookings->pluck('user_id')->unique()->count();
        $refundCount = Payment::whereHas('booking.futsalListings', function ($query) use ($vendor) {
            $query->where('vendor_id', $vendor->id);
        })
            ->where('is_refunded', true)
            ->count();

        return Inertia::render('Vendor/Dashboard/index', [
            'FutsalCount' => $FutsalCount,
            'BookingCount' => $totalBookings,
            'CustomerCount' => $customerCount,
            'RefundCount' => $refundCount,
        ]);
    }
}
