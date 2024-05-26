<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\FutsalListingsRequest;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Vendor;
use App\Models\User;
use App\Models\VendorPayment;
use Carbon\Carbon;

class ProfileViewController extends Controller
{
    public function futsalshow()
    {
        $futsal_listings = FutsalListings::with('vendor')->paginate(10);

        return Inertia::render('Admin/Court/ShowCourt/index', [
            'futsal_listings' => $futsal_listings,
        ]);
    }

    public function unverified()
    {
        $futsal_listings = FutsalListings::where('is_verified', false)->with('vendor')->get();

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
        $vendors = Vendor::withCount([
            'futsalListings as listings_count' => function ($query) {
                $query->where('is_verified', true); // Assuming there's an 'is_verified' column in the futsal_listings table
            },
        ])->paginate(10);

        return Inertia::render('Admin/Vendor/ShowVendor/index', [
            'vendor' => $vendors,
        ]);
    }

    public function customershow()
    {
        $today = Carbon::today();
        $user = User::withCount([
            'bookings' => function ($query) use ($today) {
                $query->where('booking_date', '>=', $today);
            },
        ])->paginate(10);
        return Inertia::render('Admin/Customer/ShowCustomer/index', [
            'user' => $user,
        ]);
    }

    public function payment()
    {
        $payments = VendorPayment::with('vendor')->get();
        return Inertia::render('Admin/Vendor/Payment/index', ['payments' => $payments]);
    }
}
