<?php

namespace App\Http\Controllers\Court;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class FilterController extends Controller
{
    public function filter(Request $request)
    {
        Log::info('Received filter data: ', $request);
        try {
            Log::info('Received filter data: ', $request);

            $futsal_listings = FutsalListings::where('is_verified', true)
                ->where('location', 'like', '%' . $query . '%')
                ->get();

            // // Filter by price range if provided and not null
            // if (!empty($request->price)) {
            //     [$minPrice, $maxPrice] = explode('-', $request->price);
            //     $query->whereBetween('price', [(int) $minPrice, (int) $maxPrice]);
            // }

            // // Filter by availability if provided and not null
            // if ($request->is_available !== null) {
            //     $query->where('is_available', $request->is_available === 'true');
            // }

            // // Get the results
            // $listings = $query->get();

            return Inertia::render('Customer/FutsalListings/index', [
                'futsal_listings' => $futsal_listings,
            ]);
        } catch (\Exception $e) {
            Log::error('Filter error: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred while filtering the listings'], 500);
        }
    }
}
