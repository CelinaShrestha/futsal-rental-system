<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CustomerProfileController;
use App\Http\Controllers\FutsalListingsController;
use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\VendorProfileController;

use App\Http\Controllers\Admin\ProfileViewController;
use App\Http\Controllers\Admin\ProfileEditController;
use App\Http\Controllers\Admin\CustomerProfileEditController;
use App\Http\Controllers\Admin\CourtEditController;

use App\Http\Controllers\VendorAuth\RegisteredUserController;
use App\Http\Controllers\Vendor\CourtViewController;

use App\Http\Controllers\Court\BookingController;
use App\Http\Controllers\Court\FilterController;
use App\Http\Controllers\Court\TimeSlotController;

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

// Route::get('/dashboard', function () {
//     return Inertia::render('Customer/Dashboard/index');

// })
//     ->middleware(['auth', 'verified'])
//     ->name('dashboard');

// Route::get('/Futsal', function () {
//     return Inertia::render('Customer/FutsalListings/index');
// })->name('futsalListings');

// Route::put('/futsal-listings/{id}', [FutsalListingsController::class, 'update'])->name('futsal-listings.update');
// Route::delete('/futsal-listings/{id}', [FutsalListingsController::class, 'destroy'])->name('futsal-listings.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [CustomerProfileController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/booking/{id}', [BookingController::class, 'show'])->name('book');
    Route::get('/futsal-listings', [FutsalListingsController::class, 'index'])->name('futsal-listings.index');
    Route::post('/futsal-listings', [FilterController::class, 'filter'])->name('futsal-listings.filter');
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
    Route::get('admin/court/profile/{id}', [CourtEditController::class, 'edit'])->name('admin.court.profile.edit');
    Route::patch('admin/court/profile/{id}', [FutsalListingsController::class, 'update'])->name('admin.court.profile.update');
    Route::delete('/court/profile/{id}', [FutsalListingsController::class, 'destroy'])->name('admin.court.profile.destroy');

    Route::get('admin/customers', [ProfileViewController::class, 'customershow'])->name('customers.show');
    Route::get('admin/customer/profile/{id}', [CustomerProfileEditController::class, 'edit'])->name('admin.customer.profile.edit');
    Route::patch('admin/customer/profile/{id}', [CustomerProfileEditController::class, 'update'])->name('admin.customer.profile.update');
    Route::delete('/customer/profile/{id}', [CustomerProfileEditController::class, 'destroy'])->name('admin.customer.profile.destroy');

    Route::get('admin/vendor/profile/{id}', [ProfileEditController::class, 'edit'])->name('admin.vendor.profile.edit');
    Route::patch('admin/vendor/profile/{id}', [ProfileEditController::class, 'update'])->name('admin.vendor.profile.update');
    Route::delete('/vendor/profile/{id}', [ProfileEditController::class, 'destroy'])->name('admin.vendor.profile.destroy');
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

    Route::get('/vendor/addTimeSlots/{id}', [TimeSlotController::class, 'index'])->name('time-slots.index');
    Route::post('/vendor/addTimeSlots/{id}', [TimeSlotController::class, 'storeTimeSlots'])->name('time-slots.store');

    Route::get('/vendor/courts', [CourtViewController::class, 'index'])->name('vendor.futsal-listings');
});

require __DIR__ . '/vendorauth.php';
