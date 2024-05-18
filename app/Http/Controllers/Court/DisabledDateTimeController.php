<?php

namespace App\Http\Controllers\Court;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\FutsalListings;
use App\Models\TimeSlot;
use App\Models\DisabledDateTime;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Redirect;

class DisabledDateTimeController extends Controller
{
    public function index($id)
    {
        // Retrieve the futsal listing with its time slots
        $futsal_listing = FutsalListings::findOrFail($id);

        $time_slots = TimeSlot::where('futsal_listings_id', $id)->get();

        // Pass the futsal listing to the view
        return Inertia::render('Vendor/Court/AddDisableDate/index', [
            'futsal_listing' => $futsal_listing,
            'timeSlot' => $time_slots,
        ]);
    }

    public function create(Request $request, $id)
    {
        Log::info('Received request data:', $request->all());
        $validatedData = $request->validate([
            'booking_date' => 'required|date',
            'start_time' => ['required', 'regex:/^\d{2}:\d{2}$/'],
            'end_time' => ['required', 'regex:/^\d{2}:\d{2}$/', 'after:start_time'],
            'day' => 'required|string',
            'reason' => 'required|string',
        ]);

        // Convert start_time and end_time strings to datetime objects
        $validatedData['start_time'] = \DateTime::createFromFormat('H:i', $validatedData['start_time'])->format('H:i');
        $validatedData['end_time'] = \DateTime::createFromFormat('H:i', $validatedData['end_time'])->format('H:i');

        Log::info('Validated data:', $validatedData);

        try {
            // Log to see if there are any existing disabled dates that might be conflicting
            $existingDisabledDate = DisabledDateTime::where('futsal_listings_id', $id)
                ->where('date', '=', $validatedData['booking_date'])
                ->where(function ($query) use ($validatedData) {
                    $query
                        ->where(function ($subQuery) use ($validatedData) {
                            // Check if the start time of the new disabled date falls within an existing time slot
                            $subQuery->where('start_time', '>=', $validatedData['start_time'])->where('start_time', '<=', $validatedData['end_time']);
                        })
                        ->orWhere(function ($subQuery) use ($validatedData) {
                            // Check if the end time of the new disabled date falls within an existing time slot
                            $subQuery->where('end_time', '>=', $validatedData['start_time'])->where('end_time', '<=', $validatedData['end_time']);
                        });
                })
                ->exists();

            if ($existingDisabledDate) {
                Log::info('Date range already disabled');
                $response = Response::make('error', 200, ['Content-Type' => 'text/plain']);
                $response->setContent('Time Slot disabled already');
                return $response;
            }

            // Assuming time slots are correctly identified and fetched
            $time_slot_id = TimeSlot::where('futsal_listings_id', $id)
                ->where('day', $validatedData['day'])
                ->value('id');

            // Check if a time slot ID was retrieved
            if (!$time_slot_id) {
                // Handle the case where no matching time slot is found
                Log::info('No matching time slot found');
                $response = Response::make('error', 200, ['Content-Type' => 'text/plain']);
                $response->setContent('Vo matching time slot found');
                return $response;
            }
            DisabledDateTime::create([
                'futsal_listings_id' => $id, // Use $id directly
                'time_slot_id' => $time_slot_id,
                'date' => $validatedData['booking_date'],
                'start_time' => $validatedData['start_time'],
                'end_time' => $validatedData['end_time'],
                'day' => $validatedData['day'],
                'reason' => $validatedData['reason'],
            ]);

            return Redirect::route('vendor.futsal-listings.show', ['id' => $id])->with('success', 'Added successfully!');
        } catch (\Exception $e) {
            Log::error('Failed to add disabled date:', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to add disabled date', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            // Find the DisabledDateTime entry by its ID
            $disabledDateTime = DisabledDateTime::findOrFail($id);

            // Delete the entry
            $disabledDateTime->delete();

            // Redirect back with success message
            return Redirect::back()->with('success', 'Disabled date/time entry deleted successfully');
        } catch (\Exception $e) {
            // Log the error
            Log::error('Failed to delete disabled date/time entry:', ['error' => $e->getMessage()]);

            // Redirect back with error message
            return Redirect::back()->with('error', 'Failed to delete disabled date/time entry');
        }
    }
}
