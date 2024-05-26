<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\User;
use App\Models\Vendor;
use App\Models\FutsalListings;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $today = Carbon::today();
        $totalBookings = Booking::where('booking_date', '>=', $today)->count();
        $totalUsers = User::count();
        $totalVendors = Vendor::count();
        $totalFutsalListings = FutsalListings::count();
        return Inertia::render('Admin/Dashboard/index', [
            'totalBookings' => $totalBookings,
            'totalUsers' => $totalUsers,
            'totalVendors' => $totalVendors,
            'totalFutsalListings' => $totalFutsalListings,
        ]);
    }
}
