<?php

namespace App\Http\Controllers\Court;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Rating;
use Illuminate\Support\Facades\Log;

class RatingController extends Controller
{
    public function store(Request $request, $id)
    {
        try {
            $user_id = Auth::user()->id;
            $futsal_listing_id = $id;

            $request->validate([
                'rating' => 'integer|min:0|max:5',
                'review' => 'required|string',
            ]);

            Rating::create([
                'rating' => $request->rating,
                'review' => $request->review,
                'description' => $request->description,
                'is_approved' => false,
                'futsal_listings_id' => $futsal_listing_id,
                'user_id' => $user_id,
            ]);

            return response()->json([
                'message' => 'Rating submitted successfully',
            ]);
        }
        catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Rating submission failed',

            ], 500);
        }
    }
}
