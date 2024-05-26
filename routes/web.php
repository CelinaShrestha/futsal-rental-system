<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CustomerProfileController;
use App\Http\Controllers\FutsalListingsController;
use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\VendorProfileController;
use App\Http\Controllers\PaymentController;

use App\Http\Controllers\Admin\ProfileViewController;
use App\Http\Controllers\Admin\ProfileEditController;
use App\Http\Controllers\Admin\CustomerProfileEditController;
use App\Http\Controllers\Admin\CourtEditController;
use App\Http\Controllers\Admin\DashboardController;

use App\Http\Controllers\VendorAuth\RegisteredUserController;
use App\Http\Controllers\Vendor\CourtViewController;
use App\Http\Controllers\Vendor\CustomerViewController;
use App\Http\Controllers\Vendor\DashboardViewController;

use App\Http\Controllers\Court\BookingController;
use App\Http\Controllers\Court\FilterController;
use App\Http\Controllers\Court\TimeSlotController;
use App\Http\Controllers\Court\DisabledDateTimeController;
use App\Http\Controllers\Court\RatingController;

use App\Http\Controllers\Customer\ViewBookingsController;

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
    Route::post('/booking/{id}', [BookingController::class, 'create'])->name('book.create');

    Route::get('/my-bookings', [ViewBookingsController::class, 'index'])->name('my-bookings.index');

    Route::post('/rating/{id}', [RatingController::class, 'store'])->name('rating.store');

    Route::get('/futsal-listings', [FutsalListingsController::class, 'index'])->name('futsal-listings.index');
    Route::get('/futsal-listings/search', [FutsalListingsController::class, 'search'])->name('search');
    Route::get('/futsal-listings/filter', [FilterController::class, 'filter'])->name('futsal-listings.filter');
    Route::get('/futsal-listings/{id}', [FutsalListingsController::class, 'show'])->name('futsal-listings.show');

    Route::post('/api/payment/verify', [PaymentController::class, 'verify'])->name('payment.verify');
    Route::get('/payment/success/{booking_id}', [PaymentController::class, 'success'])->name('payment.success');
    Route::get('/booking-details/{id}', [paymentController::class, 'details'])->name('booking.details');
    Route::post('/cancel-booking', [PaymentController::class, 'cancelBooking'])->name('booking.cancel');
});

require __DIR__ . '/auth.php';

Route::middleware('auth:admin')->group(function () {
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/profile', [AdminProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/admin/profile', [AdminProfileController::class, 'update'])->name('admin.profile.update');
    Route::delete('/admin/profile', [AdminProfileController::class, 'destroy'])->name('admin.profile.destroy');

    Route::get('admin/vendors', [ProfileViewController::class, 'vendorshow'])->name('vendors.show');
    Route::get('admin/vendor/register', [RegisteredUserController::class, 'create'])->name('admin.vendor.register');
    Route::post('admin/vendor/register', [RegisteredUserController::class, 'store']);
    Route::get('admin/vendor/payment', [ProfileViewController::class, 'payment'])->name('vendors.payment');

    Route::get('admin/courts', [ProfileViewController::class, 'futsalshow'])->name('admin.courts.show');
    Route::get('admin/Unverified_Courts', [ProfileViewController::class, 'unverified'])->name('admin.courts.unverified');
    Route::patch('admin/Unverified_Courts/{id}', [ProfileViewController::class, 'futsalverify'])->name('admin.court.verify');
    Route::get('admin/court/profile/{id}', [CourtEditController::class, 'edit'])->name('admin.court.profile.edit');
    Route::patch('admin/court/profile/{id}', [FutsalListingsController::class, 'update'])->name('admin.court.profile.update');
    Route::delete('admin/courts/{id}', [FutsalListingsController::class, 'destroy'])->name('admin.court.profile.destroy');

    Route::get('admin/customers', [ProfileViewController::class, 'customershow'])->name('customers.show');
    Route::get('admin/customer/profile/{id}', [CustomerProfileEditController::class, 'edit'])->name('admin.customer.profile.edit');
    Route::patch('admin/customer/profile/{id}', [CustomerProfileEditController::class, 'update'])->name('admin.customer.profile.update');
    Route::delete('/customer/profile/{id}', [CustomerProfileEditController::class, 'destroy'])->name('admin.customer.profile.destroy');

    Route::get('admin/vendor/profile/{id}', [ProfileEditController::class, 'edit'])->name('admin.vendor.profile.edit');
    Route::patch('admin/vendor/profile/{id}', [ProfileEditController::class, 'update'])->name('admin.vendor.profile.update');
    Route::delete('/vendor/profile/{id}', [ProfileEditController::class, 'destroy'])->name('admin.vendor.profile.destroy');
});

require __DIR__ . '/adminauth.php';

// Route::get('/vendor/dashboard', function () {
//     return Inertia::render('Vendor/Dashboard/index');
// })
//     ->middleware(['auth:vendor', 'verified'])
//     ->name('vendor.dashboard');

Route::middleware('auth:vendor')->group(function () {
    Route::get('/vendor/dashboard', [DashboardViewController::class, 'index'])->name('vendor.dashboard');
    Route::get('/vendor/profile', [VendorProfileController::class, 'edit'])->name('vendor.profile.edit');
    Route::patch('/vendor/profile', [VendorProfileController::class, 'update'])->name('vendor.profile.update');
    Route::delete('/vendor/profile', [VendorProfileController::class, 'destroy'])->name('vendor.profile.destroy');
    Route::get('/vendor/addCourt', [FutsalListingsController::class, 'create'])->name('futsal-listings.create');
    Route::post('/vendor/addCourt', [FutsalListingsController::class, 'store'])->name('futsal-listings.store');

    Route::get('/vendor/CustomerBookings', [CustomerViewController::class, 'index'])->name('vendor.customer-bookings');

    Route::get('/vendor/addTimeSlots/{id}', [TimeSlotController::class, 'index'])->name('time-slots.index');
    Route::post('/vendor/addTimeSlots/{id}', [TimeSlotController::class, 'storeTimeSlots'])->name('time-slots.store');
    Route::get('/vendor/editTimeSlots/{id}', [TimeSlotController::class, 'edit'])->name('time-slots.edit');
    Route::patch('/vendor/editTimeSlots/{id}', [TimeSlotController::class, 'update'])->name('time-slots.update');

    Route::get('/vendor/disabledDateTime/{id}', [DisabledDateTimeController::class, 'index'])->name('vendor.disable.index');
    Route::post('/vendor/disabledDateTime/{id}', [DisabledDateTimeController::class, 'create'])->name('vendor.disable.create');
    Route::delete('/vendor/disabledDateTime/{id}', [DisabledDateTimeController::class, 'destroy'])->name('vendor.disable.destroy');

    Route::get('/vendor/courts', [CourtViewController::class, 'index'])->name('vendor.futsal-listings');
    Route::get('/vendor/courts/{id}', [CourtViewController::class, 'show'])->name('vendor.futsal-listings.show');

    Route::get('/vendor/refund', [CustomerViewController::class, 'refund'])->name('vendor.refund');
    Route::post('/vendor/refund/{id}', [PaymentController::class, 'markAsRefunded'])->name('vendor.refund.store');
});

require __DIR__ . '/vendorauth.php';
