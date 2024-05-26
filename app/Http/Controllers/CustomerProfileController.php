<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\FutsalListings;

class CustomerProfileController extends Controller
{
    public function index()
    {
        $futsal_listings = FutsalListings::where('is_verified', true)
            ->with(['ratings']) // Eager load the ratings
            ->get();

        // You might want to calculate average ratings for each futsal listing
        foreach ($futsal_listings as $futsal_listing) {
            $totalRatings = $futsal_listing->ratings->count();
            $averageRating = $totalRatings > 0 ? $futsal_listing->ratings->avg('rating') : 0;
            $futsal_listing->average_rating = $averageRating;
            $futsal_listing->total_ratings = $totalRatings;
        }

        return Inertia::render('Customer/Dashboard/index', [
            'futsal_listings' => $futsal_listings,
        ]);
    }
}
