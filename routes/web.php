<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\FutsalListingsController;
use App\Http\Controllers\AdminProfileController;
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

Route::get('/futsal-listings', [FutsalListingsController::class, 'index'])
    ->name('futsal-listings.index')
    ->middleware(['auth', 'verified']);
Route::post('/futsal-listings', [FutsalListingsController::class, 'store'])->name('futsal-listings.store');
Route::get('/futsal-listings/{id}', [FutsalListingsController::class, 'show'])
    ->name('futsal-listings.show')
    ->middleware(['auth', 'verified']);
// Route::put('/futsal-listings/{id}', [FutsalListingsController::class, 'update'])->name('futsal-listings.update');
// Route::delete('/futsal-listings/{id}', [FutsalListingsController::class, 'destroy'])->name('futsal-listings.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
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
});

require __DIR__ . '/adminauth.php';
