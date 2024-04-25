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
        try {
            Log::info('Received filter data: ', $request->all());

            $location = $request->input('location');
            $price = $request->input('price');
            $is_available = $request->input('is_available');

            $query = FutsalListings::where('is_verified', true);

            // Process location filter
            if ($location) {
                $query->where('location', 'like', '%' . $location . '%');
            }

            // Process price filter
            if ($price) {
                [$minPrice, $maxPrice] = explode('-', $price);
                $query->whereBetween('price', [(int) $minPrice, (int) $maxPrice]);
            }

            // Process availability filter
            if ($is_available) {
                $query->where('is_available', $is_available === 'true' ? 1 : 0);
            }

            $futsalListings = $query->get();

            return response()->json(['futsal_listings' => $futsalListings]);
        } catch (\Exception $e) {
            Log::error('Filter error: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred while filtering the listings'], 500);
        }
    }
}
