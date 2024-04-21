<?php

namespace App\Http\Controllers\Court;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\BookingRequest;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Label84\HoursHelper\Facades\HoursHelper;
use App\Models\TimeSlot;
use App\Models\Booking;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

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

    public function create(BookingRequest $request, $id)
    {
        try {
            // Retrieve validated data from the request
            $validatedData = $request->validated();

            // Process the validated data
            $futsal_listing_id = $id;
            $user_id = Auth::id();
            $time_slot = TimeSlot::where('futsal_listings_id', $futsal_listing_id)
                ->where('day', $validatedData['day'])
                ->first();
            $time_slot_id = $time_slot ? $time_slot->id : null; // Ensure there's a fallback or handle the case when no slot is found
            $times = explode('-', $validatedData['time_slot']);
            $startTime = date('H:i:s', strtotime(trim($times[0])));
            $endTime = date('H:i:s', strtotime(trim($times[1])));

            Booking::create([
                'futsal_listings_id' => $futsal_listing_id,
                'user_id' => $user_id,
                'time_slot_id' => $time_slot_id,
                'start_time' => $startTime,
                'end_time' => $endTime,
                'booking_date' => $validatedData['booking_date'],
                'duration' => $validatedData['interval'],
                'total_price' => $validatedData['total_price'],
                'day' => $validatedData['day'],
                'is_confirmed' => false,
                'is_cancelled' => false,
                'is_paid' => false,
            ]);

            return response()->json(['message' => 'Booking created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create booking', 'error' => $e->getMessage()], 500);
        }
    }
}
