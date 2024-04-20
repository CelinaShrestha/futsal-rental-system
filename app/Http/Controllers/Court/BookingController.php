<?php

namespace App\Http\Controllers\Court;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Label84\HoursHelper\Facades\HoursHelper;
use App\Models\TimeSlot;

class BookingController extends Controller
{
    public function show($id)
    {
        $futsal_listing = FutsalListings::findOrFail($id);

        $timeSlot = TimeSlot::where('futsal_listings_id', $id)->get();

        // $hours = HoursHelper::create('08:00', '11:00', 60, 'H:i', [
        //     ['09:00', '09:59'],
        //     // more..
        // ]);

        return Inertia::render('Customer/Booking/index', [
            'futsal_listing' => $futsal_listing,
            'timeSlot' => $timeSlot,
        ]);
    }
    // public function show($id, $day, $interval)
    // {
    //     \Log::info("ID: $id, Day: $day, Interval: $interval"); // Log values for debugging

    //     $futsal_listing = FutsalListings::findOrFail($id);
    //     $timeSlot = TimeSlot::where('day', $day)->where('futsal_listings_id', $id)->first();

    //     $hours = [];
    //     if ($timeSlot && $timeSlot->start_time && $timeSlot->end_time) {
    //         $hours = HoursHelper::create($timeSlot->start_time, $timeSlot->end_time, $interval);
    //     }

    //     return route('book', [
    //         'id' => $futsal_listing->id,
    //         'day' => $day, // Ensure you're passing the correct day parameter
    //         'interval' => $interval,
    //     ]);
    // }
}
