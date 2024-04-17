<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\FutsalListings;


class CustomerProfileController extends Controller
{
    public function index()
    {
        $futsal_listings = FutsalListings::where('is_verified', true)->get();

        return Inertia::render('Customer/Dashboard/index', [
            'futsal_listings' => $futsal_listings,
        ]);
    }
}
