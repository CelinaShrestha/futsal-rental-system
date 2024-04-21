<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ViewBookingsController extends Controller
{
    public function index()
    {
        // Retrieve bookings along with their associated futsal listings
        $bookings = Booking::with('futsalListings')->where('user_id', Auth::id())->get();

        return Inertia::render('Customer/Booking/ViewBookings/index', [
            'bookings' => $bookings,
        ]);
    }
}
