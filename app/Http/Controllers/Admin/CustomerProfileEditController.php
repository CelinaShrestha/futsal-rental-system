<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class CustomerProfileEditController extends Controller
{
    public function edit(Request $request, $id): Response
    {
        $user = User::find($id);
        return Inertia::render('Admin/Customer/EditCustomer/index', [
            'user' => $user,
            // 'mustVerifyEmail' => $request->Auth::guard('vendor')->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request, $id): RedirectResponse
    {
        $user = User::find($id);
        if (!$user) {
            // Vendor not found, handle this case (e.g., redirect back with an error message)
            return redirect()->back()->with('error', 'User not found.');
        }
        $user->fill($request->validated());

        // if ($request->Auth::guard('vendor')->user()->isDirty('email')) {
        //     $request->Auth::guard('vendor')->user()->email_verified_at = null;
        // }

        $user->save();

        return Redirect::route('customers.show');
    }

    public function destroy(Request $request, $id): RedirectResponse
    {
        $user = User::find($id);
        $user->delete();

        return Redirect::route('customers.show');
    }
}
