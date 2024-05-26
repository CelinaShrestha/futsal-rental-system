<?php

namespace App\Http\Controllers\VendorAuth;

use App\Http\Controllers\Controller;
use App\Models\Vendor;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\VendorRegisteredMail;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Vendor/Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'firstName' => 'required|string|max:255',
            'middleName' => 'nullable|string|max:255',
            'lastName' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:' . Vendor::class,
            'email' => 'required|string|lowercase|email|max:255|unique:' . Vendor::class,
            'password' => ['required', 'confirmed', 'min:8', 'regex:/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/'],
            'contactNumber' => 'required|string|max:10|min:10|digits:10',
            'address' => 'required|string|max:255',
        ]);

        $vendor = Vendor::create([
            'firstName' => $request->firstName,
            'middleName' => $request->middleName,
            'lastName' => $request->lastName,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'contactNumber' => $request->contactNumber,
            'address' => $request->address,
            'email' => $request->email,
        ]);

        event(new Registered($vendor));

        Mail::to($vendor->email)->send(new VendorRegisteredMail($vendor->firstName, $vendor->email, $request->password));

        Auth::guard('vendor')->login($vendor);

        return redirect(RouteServiceProvider::ADMIN_HOME);
    }
}
