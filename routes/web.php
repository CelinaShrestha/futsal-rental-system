<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\FutsalListingsController;
use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\VendorProfileController;
use App\Http\Controllers\Admin\ProfileViewController;
use App\Http\Controllers\VendorAuth\RegisteredUserController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Customer/Dashboard/index');
})
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

// Route::get('/Futsal', function () {
//     return Inertia::render('Customer/FutsalListings/index');
// })->name('futsalListings');

// Route::put('/futsal-listings/{id}', [FutsalListingsController::class, 'update'])->name('futsal-listings.update');
// Route::delete('/futsal-listings/{id}', [FutsalListingsController::class, 'destroy'])->name('futsal-listings.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/booking', function () {
        return Inertia::render('Customer/Booking/index');
    })->name('book');
    Route::get('/futsal-listings', [FutsalListingsController::class, 'index'])->name('futsal-listings.index');

    Route::get('/futsal-listings/{id}', [FutsalListingsController::class, 'show'])->name('futsal-listings.show');
});

require __DIR__ . '/auth.php';

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard/index');
})
    ->middleware(['auth:admin', 'verified'])
    ->name('admin.dashboard');

Route::middleware('auth:admin')->group(function () {
    Route::get('/admin/profile', [AdminProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/admin/profile', [AdminProfileController::class, 'update'])->name('admin.profile.update');
    Route::delete('/admin/profile', [AdminProfileController::class, 'destroy'])->name('admin.profile.destroy');
    Route::get('admin/vendors', [ProfileViewController::class, 'vendorshow'])->name('vendors.show');
    Route::get('admin/vendor/register', [RegisteredUserController::class, 'create'])->name('admin.vendor.register');

    Route::post('admin/vendor/register', [RegisteredUserController::class, 'store']);

    Route::get('admin/courts', [ProfileViewController::class, 'futsalshow'])->name('admin.courts.show');
    Route::get('admin/Unverified_Courts', [ProfileViewController::class, 'unverified'])->name('admin.courts.unverified');
    Route::patch('admin/Unverified_Courts/{id}', [ProfileViewController::class, 'futsalverify'])->name('admin.court.verify');
});

require __DIR__ . '/adminauth.php';

Route::get('/vendor/dashboard', function () {
    return Inertia::render('Vendor/Dashboard/index');
})
    ->middleware(['auth:vendor', 'verified'])
    ->name('vendor.dashboard');

Route::middleware('auth:vendor')->group(function () {
    Route::get('/vendor/profile', [VendorProfileController::class, 'edit'])->name('vendor.profile.edit');
    Route::patch('/vendor/profile', [VendorProfileController::class, 'update'])->name('vendor.profile.update');
    Route::delete('/vendor/profile', [VendorProfileController::class, 'destroy'])->name('vendor.profile.destroy');
    Route::get('/vendor/addCourt', [FutsalListingsController::class, 'create'])->name('futsal-listings.create');
    Route::post('/vendor/addCourt', [FutsalListingsController::class, 'store'])->name('futsal-listings.store');
});

require __DIR__ . '/vendorauth.php';
