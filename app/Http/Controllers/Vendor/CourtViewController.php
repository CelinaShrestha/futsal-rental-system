<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class CourtViewController extends Controller
{
    public function index()
    {
        // Retrieve the authenticated user (Vendor instance)
        $vendor = Auth::guard('vendor')->user();

        // Retrieve futsal listings for the vendor with bookings count
        $futsal_listings = FutsalListings::where('vendor_id', $vendor->id)
            ->withCount('bookings')
            ->get();

        return Inertia::render('Vendor/Court/ViewCourt/index', [
            'futsal_listings' => $futsal_listings,
        ]);
    }
}
