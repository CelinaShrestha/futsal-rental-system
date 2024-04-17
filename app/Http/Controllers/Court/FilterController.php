<?php

namespace App\Http\Controllers\Court;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FutsalListings;
use Inertia\Inertia;

class FilterController extends Controller
{
    public function filter(Request $request)
    {
        // Extract filters from the request
        $city = $request->input('location');
        $price = $request->input('price');
        $availability = $request->input('availability');

        // Apply filters and fetch filtered futsal listings
        $filteredFutsalListings = FutsalListings::query();

        if (!empty($city)) {
            $filteredFutsalListings->whereIn('location', $city);
        }

        if (!empty($price)) {
            foreach ($price as $range) {
                $priceRange = explode('-', $range);
                if (count($priceRange) === 2) {
                    $filteredFutsalListings->orWhereBetween('price', [$priceRange[0], $priceRange[1]]);
                }
            }
        }

        if (!empty($availability)) {
            // Convert string values to boolean
            $availability = array_map(function ($value) {
                return $value === 'true' ? true : false;
            }, $availability);

            // Filter based on availability
            $filteredFutsalListings->whereIn('is_available', $availability);
        }
        $filteredFutsalListings = $filteredFutsalListings->get();

        return Inertia::render('Customer/FutsalListings/index', ['futsal_listings' => $filteredFutsalListings]);
    }
}
