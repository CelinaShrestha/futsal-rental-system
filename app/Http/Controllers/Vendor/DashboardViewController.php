<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Booking;

class DashboardViewController extends Controller
{
    public function index()
    {
        $vendor = Auth::guard('vendor')->user();

        // Get the total number of bookings directly from the Booking model
        $totalBookings = Booking::whereIn('futsal_listings_id', $vendor->futsalListings->pluck('id'))->count();

        $FutsalCount = $vendor->futsalListings->count();
        $customerCount = $vendor->futsalListings->flatMap->bookings->pluck('user_id')->unique()->count();

        return Inertia::render('Vendor/Dashboard/index', [
            'FutsalCount' => $FutsalCount,
            'BookingCount' => $totalBookings,
            'CustomerCount' => $customerCount,
        ]);
    }
}
