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
        $timeSlot = TimeSlot::where('day', 'Thursday')->where('futsal_listings_id', $id)->first();

        $hours = [];
        if ($timeSlot && $timeSlot->start_time && $timeSlot->end_time) {
            $hours = HoursHelper::create($timeSlot->start_time, $timeSlot->end_time, 30);
        }

        return Inertia::render('Customer/Booking/index', [
            'futsal_listing' => $futsal_listing,
            'hours' => $hours,
            'start_time' => $timeSlot->start_time ?? null,
            'end_time' => $timeSlot->end_time ?? null,
        ]);
    }
}
