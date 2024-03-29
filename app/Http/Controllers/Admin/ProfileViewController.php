<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\FutsalListingsRequest;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Vendor;

class ProfileViewController extends Controller
{
    public function futsalshow()
    {
        $futsal_listings = FutsalListings::all();

        return Inertia::render('Admin/Court/ShowCourt/index', [
            'futsal_listings' => $futsal_listings,
        ]);
    }

    public function unverified()
    {
        $futsal_listings = FutsalListings::where('is_verified', false)->get();

        return Inertia::render('Admin/Court/UnverifiedCourt/index', [
            'futsal_listings' => $futsal_listings,
        ]);
    }

    public function futsalverify(Request $request, $id)
    {
        $futsal_listings = FutsalListings::find($id);
        $futsal_listings->is_verified = true;
        $futsal_listings->save();

        return redirect()->route('admin.courts.unverified');
    }

    public function vendorshow()
    {
        $vendor = Vendor::all();

        return Inertia::render('Admin/Vendor/ShowVendor/index', [
            'vendor' => $vendor,
        ]);
    }
}
