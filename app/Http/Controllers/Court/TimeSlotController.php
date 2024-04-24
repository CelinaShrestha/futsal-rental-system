<?php

namespace App\Http\Controllers\Court;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\TimeSlot;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class TimeSlotController extends Controller
{
    public function index($id)
    {
        $vendor_id = Auth::id();
        return Inertia::render('Vendor/Court/AddTimeSlot/index', [
            'vendor_id' => $vendor_id,
            'futsal_listings_id' => $id,
        ]);
    }

    public function storeTimeSlots(Request $request, $id)
    {
        // try {
        //     Log::info('Received raw data:', $request->all());
        //     // Log all incoming request data
        //     dd($request->all()); // Dump and die to see exactly what's coming in
        //     $validated = $request->validated(); // Ensure all data is valid
        //     $vendor_id = Auth::id();
        //     $futsal_listings_id = $id; // Accessing directly from the validated data

        //     // Process the submitted time slots data
        //     $timeSlotsData = $request->input('timeSlots'); // Using input method for clarity
        //     dd($timeSlotsData);

        //     // Iterate over the time slots data and create TimeSlot instances
        //     foreach ($timeSlotsData as $slot) {
        //         TimeSlot::create([
        //             'day' => $slot['day'],
        //             'start_time' => $slot['start_time'],
        //             'end_time' => $slot['end_time'],
        //             'futsal_listings_id' => $futsal_listings_id,
        //             'vendor_id' => $vendor_id,
        //             'is_booked' => false,
        //             'is_available' => true,
        //         ]);
        //     }

        //     // Return a success response
        //     return response()->json(['message' => 'Time slots created successfully'], 201);
        // } catch (\Exception $e) {
        //     Log::error($e->getMessage()); // Make sure these logs are informative
        //     return response()->json(['message' => 'Failed to create time slots', 'error' => $e->getMessage()], 500);
        // }

        // try {
        //     // Validate incoming request data
        //     $validatedData = $request->validate([
        //         'day' => 'required|string',
        //         'start_time' => 'required|string',
        //         'end_time' => 'required|string',
        //     ]);

        //     // Create a new TimeSlot instance
        //     $timeSlot = new TimeSlot();
        //     $timeSlot->day = $validatedData['day'];
        //     $timeSlot->start_time = $validatedData['start_time'];
        //     $timeSlot->end_time = $validatedData['end_time'];
        //     $timeSlot->futsal_listings_id = $id; // Accessing directly from the validated data
        //     $timeSlot->vendor_id = Auth::id();
        //     $timeSlot->is_booked = false;
        //     $timeSlot->is_available = true;
        //     // Add other necessary fields and save the model
        //     $timeSlot->save();

        //     // Return a success response
        //     return response()->json(['message' => 'Time slot created successfully'], 200);
        // } catch (\Exception $e) {
        //     // Handle exceptions
        //     return response()->json(['message' => 'Failed to create time slot', 'error' => $e->getMessage()], 500);
        // }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'timeSlots' => 'required|array', // Ensure 'timeSlots' is an array
            'timeSlots.*.day' => 'required|string', // Ensure each time slot has a 'day' value
            'timeSlots.*.start_time' => 'required|string', // Ensure each time slot has a 'start_time' value
            'timeSlots.*.end_time' => 'required|string', // Ensure each time slot has an 'end_time' value
        ]);

        try {
            // Iterate over the time slots and create records in the database
            foreach ($validatedData['timeSlots'] as $timeSlotData) {
                TimeSlot::create([
                    'day' => $timeSlotData['day'],
                    'start_time' => $timeSlotData['start_time'],
                    'end_time' => $timeSlotData['end_time'],
                    'futsal_listings_id' => $id,
                    'vendor_id' => Auth::id(),
                    'is_booked' => false,
                    'is_available' => true,
                ]);
            }

            // Return a success response
            return response()
                ->json(['message' => 'Time slots created successfully'], 201)
                ->header('X-Inertia-Location', route('vendor.dashboard'));
        } catch (\Exception $e) {
            // If an error occurs during creation, return an error response
            return response()->json(['message' => 'Failed to create time slots', 'error' => $e->getMessage()], 500);
        }
    }

    public function edit($id)
    {
        $vendor_id = Auth::id();
        $timeSlots = TimeSlot::where('futsal_listings_id', $id)->where('vendor_id', $vendor_id)->get();
        return Inertia::render('Vendor/Court/EditTimeSlot/index', [
            'timeSlots' => $timeSlots,
            'futsal_listing_id' => $id,
        ]);
    }

    public function update(Request $request, $id)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'timeSlots' => 'required|array', // Ensure 'timeSlots' is an array
            'timeSlots.*.id' => 'required|integer', // Ensure each time slot has an 'id' value
            'timeSlots.*.day' => 'required|string', // Ensure each time slot has a 'day' value
            'timeSlots.*.start_time' => 'required|string', // Ensure each time slot has a 'start_time' value
            'timeSlots.*.end_time' => 'required|string', // Ensure each time slot has an 'end_time' value
        ]);

        try {
            // Iterate over the time slots and update records in the database
            foreach ($validatedData['timeSlots'] as $timeSlotData) {
                TimeSlot::where('id', $timeSlotData['id'])->update([
                    'day' => $timeSlotData['day'],
                    'start_time' => $timeSlotData['start_time'],
                    'end_time' => $timeSlotData['end_time'],
                ]);
            }

            // Return a success response
            return response()
                ->json(['message' => 'Time slots updated successfully'], 200)
                ->redirect(route('vendor.futsal-listings'));
        } catch (\Exception $e) {
            // If an error occurs during update, return an error response
            return response()->json(['message' => 'Failed to update time slots', 'error' => $e->getMessage()], 500);
        }
    }
}
