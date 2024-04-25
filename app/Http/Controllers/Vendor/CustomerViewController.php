<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Booking;


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
            ->get();

        return Inertia::render('Vendor/Court/BookedCourts/index', [
            'booking_list' => $booking_list,
        ]);
    }
}
