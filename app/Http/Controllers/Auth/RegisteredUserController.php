<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
// use App\Models\Customer;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Customer/Auth/Register');
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
            'username' => 'required|string|max:255|unique:' . User::class,
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'contactNumber' => 'required|string|max:10|min:10',
            'address' => 'required|string|max:255',
        ]);

        $user = User::create([
            'firstName' => $request->firstName,
            'middleName' => $request->middleName,
            'lastName' => $request->lastName,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'contactNumber' => $request->contactNumber,
            'address' => $request->address,
            'email' => $request->email,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
