<?php

namespace App\Http\Controllers\Court;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Label84\HoursHelper\Facades\HoursHelper;

class BookingController extends Controller
{
    public function show($id)
    {
        $futsal_listing = FutsalListings::findOrFail($id);
        $hours = HoursHelper::create('08:00', '11:00', 60, 'H:i', [
            ['09:00', '09:59'],
            // more..
        ]);

        return Inertia::render('Customer/Booking/index', [
            'futsal_listing' => $futsal_listing,
            'hours' => $hours,
        ]);
    }
}
