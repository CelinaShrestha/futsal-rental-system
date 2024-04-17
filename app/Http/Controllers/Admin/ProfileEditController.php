<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\VendorProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use App\Models\Vendor;

class ProfileEditController extends Controller
{
    public function edit(Request $request, $id): Response
    {
        $vendor = Vendor::find($id);
        return Inertia::render('Admin/Vendor/EditVendor/index', [
            'vendor' => $vendor,
            // 'mustVerifyEmail' => $request->Auth::guard('vendor')->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(VendorProfileUpdateRequest $request, $id): RedirectResponse
    {
        $vendor = Vendor::find($id);

        if (!$vendor) {
            // Vendor not found, handle this case (e.g., redirect back with an error message)
            return redirect()->back()->with('error', 'Vendor not found.');
        }
        $vendor->fill($request->validated());

        // if ($request->Auth::guard('vendor')->user()->isDirty('email')) {
        //     $request->Auth::guard('vendor')->user()->email_verified_at = null;
        // }

        $vendor->save();

        return Redirect::route('vendors.show');
    }

    public function destroy(Request $request, $id): RedirectResponse
    {
        $vendor = Vendor::find($id);

        $vendor->delete();

        return Redirect::route('vendors.show');
    }
}
