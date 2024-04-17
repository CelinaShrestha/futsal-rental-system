<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\FutsalListings;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\FutsalListingsRequest;


class CourtEditController extends Controller
{
    public function edit(Request $request, $id): Response
    {
        $futsal = FutsalListings::find($id);
        return Inertia::render('Admin/Court/EditCourt/index', [
            'futsal' => $futsal,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    // public function update(FutsalListingsRequest $request, $id)
    // {
    //     try {
    //         // Find product
    //         $futsal_listings = FutsalListings::find($id);
    //         if (!$futsal_listings) {
    //             return response()->json(
    //                 [
    //                     'message' => 'Product Not Found.',
    //                 ],
    //                 404,
    //             );
    //         }

    //         // Update fields
    //         $futsal_listings->title = $request->title;
    //         $futsal_listings->short_description = $request->short_description;
    //         $futsal_listings->long_description = $request->long_description;
    //         $futsal_listings->location = $request->location;
    //         $futsal_listings->price = $request->price;
    //         $futsal_listings->capacity = $request->capacity;
    //         $futsal_listings->facilities = $request->facilities;
    //         $futsal_listings->contactNumber = $request->contactNumber;
    //         $futsal_listings->altContactNumber = $request->altContactNumber;
    //         $futsal_listings->is_verified = $request->is_verified ?? false;
    //         $futsal_listings->is_available = $request->is_available ?? true;

    //         // Handle image upload for each image in the request
    //         if ($request->hasFile('images')) {
    //             $imageNames = [];
    //             foreach ($request->file('images') as $image) {
    //                 $imageName = Str::random(32) . '.' . $image->getClientOriginalExtension();
    //                 $image->storeAs('public/images', $imageName);
    //                 $imageNames[] = $imageName;
    //             }
    //             $futsal_listings->images = $imageNames;
    //         }

    //         // Save changes
    //         $futsal_listings->save();

    //         // Return JSON response
    //         return response()->json(
    //             [
    //                 'message' => 'Product successfully updated.',
    //             ],
    //             200,
    //         );
    //     } catch (\Exception $e) {
    //         // Return JSON response for error
    //         return response()->json(
    //             [
    //                 'message' => 'Something went really wrong!',
    //             ],
    //             500,
    //         );
    //     }
    // }

    // public function destroy(Request $request, $id): RedirectResponse
    // {
    //     $futsal = Futsal::find($id);
    //     $futsal->delete();

    //     return Redirect::route('futsal.show');
    // }
}
