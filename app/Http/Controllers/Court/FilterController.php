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
        $location = $request->input('location', '');
        $priceRange = $request->input('price', '');

        try {
            $query = FutsalListings::where('is_verified', true);

            if (!empty($location)) {
                $query->where('location', 'like', '%' . $location . '%');
            }

            if (!empty($priceRange)) {
                $priceLimits = explode('-', $priceRange);
                $query->whereBetween('price', [$priceLimits[0], $priceLimits[1]]);
            }

            $futsal_listings = $query->paginate(2);

            // Log::info('SQL Query:', [$query->toSql(), $query->getBindings()]);

            return Inertia::render('Customer/FutsalListings/index', [
                'futsal_listings' => $futsal_listings,
            ]);
        } catch (\Exception $e) {
            Log::error('Filter error:', ['message' => $e->getMessage(), 'exception' => $e]);
            return response()->json(['error' => 'An error occurred while filtering the listings'], 500);
        }
    }
}
