<?php

namespace App\Http\Controllers;
use App\Http\Requests\FutsalListingsRequest;
use App\Models\FutsalListings;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use App\Models\Vendor;
use Illuminate\Support\Facades\Auth;

class FutsalListingsController extends Controller
{
    public function index()
    {
        $futsal_listings = FutsalListings::where('is_verified', true)->get();

        return Inertia::render('Customer/FutsalListings/index', [
            'futsal_listings' => $futsal_listings,
        ]);
    }

    public function create()
    {
        $vendor_id = Auth::id();
        return Inertia::render('Vendor/Court/AddCourt/index', [
            'vendor_id' => $vendor_id,
        ]);
    }

    public function store(FutsalListingsRequest $request)
    {
        try {
            $user_id = Auth::id();
            // Create an array to store image file names
            $imageNames = [];

            // Upload and store each image
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $imageName = Str::random(32) . '.' . $image->getClientOriginalExtension();
                    $imageNames[] = $imageName;
                    Storage::disk('public')->put($imageName, file_get_contents($image));
                }
            }

            // Create FutsalListing
            $futsalListing = FutsalListings::create([
                'title' => $request->title,
                'short_description' => $request->short_description,
                'long_description' => $request->long_description,
                'images' => $imageNames,
                'location' => $request->location,
                'price' => $request->price,
                'capacity' => $request->capacity,
                'facilities' => $request->facilities,
                'contactNumber' => $request->contactNumber,
                'altContactNumber' => $request->altContactNumber,
                'is_verified' => $request->is_verified ?? false,
                'is_available' => $request->is_available ?? true,
                'vendor_id' => $user_id,
            ]);

            // Redirect back to a specific page with success message
            return redirect()
                ->route('time-slots.index', ['id' => $futsalListing->id])
                ->with('success', 'Futsal listing created successfully.');
        } catch (\Exception $e) {
            // Log the exception for debugging purposes
            Log::error('Futsal listing creation failed: ' . $e->getMessage());

            // Redirect back with an error message
            return back()->withErrors(['error' => 'Something went wrong. Please try again.']);
        }
    }
    // public function store(FutsalListingsRequest $request)
    // {
    //     $vendor = $this->vendor();
    //     try {
    //         // Create an array to store image file names
    //         $imageNames = [];

    //         // Upload and store each image
    //         if ($request->hasFile('images')) {
    //             foreach ($request->file('images') as $image) {
    //                 $imageName = Str::random(32) . '.' . $image->getClientOriginalExtension();
    //                 $imageNames[] = $imageName;
    //                 Storage::disk('public')->put($imageName, file_get_contents($image));
    //             }
    //         }

    //         // Create Product
    //         FutsalListings::create([
    //             'title' => $request->title,
    //             'short_description' => $request->short_description,
    //             'long_description' => $request->long_description,
    //             'images' => $imageNames,
    //             'location' => $request->location,
    //             'price' => $request->price,
    //             'capacity' => $request->capacity,
    //             'facilities' => $request->facilities,
    //             'contactNumber' => $request->contactNumber,
    //             'altContactNumber' => $request->altContactNumber,
    //             'is_verified' => $request->is_verified ?? false,
    //             'is_available' => $request->is_available ?? true,
    //             'vendor_id' => $vendor->id,
    //         ]);

    //         // Redirect back to a specific page (e.g., futsal-listings.index)
    //         return Redirect::route('vendor.dashboard')->with('success', 'Futsal listing created successfully.');
    //     } catch (\Exception $e) {
    //         // Handle exceptions and redirect back with an error message
    //         return Redirect::back()
    //             ->withInput()
    //             ->withErrors(['error' => 'Something went really wrong!']);
    //     }
    // }

    public function show($id)
    {
        $futsal_listing = FutsalListings::findOrFail($id);

        return Inertia::render('Customer/FutsalDescription/index', [
            'futsal_listing' => $futsal_listing,
        ]);
        // $futsal_listings = FutsalListings::find($id);

        // // if (!$futsal_listings) {
        // //     return response()->json(
        // //         [
        // //             'message' => 'Product Not Found.',
        // //         ],
        // //         404,
        // //     );
        // // }

        // return Inertia::render('Customer/FutsalDescription/index', [
        //     'futsal_listings' => $futsal_listings,
        // ]);
    }

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

    //         //echo "request : $request->image";
    //         $futsal_listings->title = $request->title;
    //         $futsal_listings->description = $request->description;
    //         $futsal_listings->location = $request->location;
    //         $futsal_listings->price = $request->price;

    //         if ($request->image) {
    //             // Public storage
    //             $storage = Storage::disk('public');

    //             // Old iamge delete
    //             if ($storage->exists($product->image)) {
    //                 $storage->delete($product->image);
    //             }

    //             // Image name
    //             $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
    //             $futsal_listings->image = $imageName;

    //             // Image save in public folder
    //             $storage->put($imageName, file_get_contents($request->image));
    //         }

    //         // Update Product
    //         $futsal_listings->save();

    //         // Return Json Response
    //         return response()->json(
    //             [
    //                 'message' => 'Product successfully updated.',
    //             ],
    //             200,
    //         );
    //     } catch (\Exception $e) {
    //         // Return Json Response
    //         return response()->json(
    //             [
    //                 'message' => 'Something went really wrong!',
    //             ],
    //             500,
    //         );
    //     }
    // }

    public function update(FutsalListingsRequest $request, $id)
    {
        try {
            // Find product
            $futsal_listings = FutsalListings::find($id);
            if (!$futsal_listings) {
                return response()->json(
                    [
                        'message' => 'Product Not Found.',
                    ],
                    404,
                );
            }

            // Update fields
            $futsal_listings->title = $request->title;
            $futsal_listings->short_description = $request->short_description;
            $futsal_listings->long_description = $request->long_description;
            $futsal_listings->location = $request->location;
            $futsal_listings->price = $request->price;
            $futsal_listings->capacity = $request->capacity;
            $futsal_listings->facilities = $request->facilities;
            $futsal_listings->contactNumber = $request->contactNumber;
            $futsal_listings->altContactNumber = $request->altContactNumber;
            $futsal_listings->is_verified = $request->is_verified ?? false;
            $futsal_listings->is_available = $request->is_available ?? true;

            // Handle image upload for each image in the request
            if ($request->hasFile('images')) {
                $imageNames = [];
                foreach ($request->file('images') as $image) {
                    $imageName = Str::random(32) . '.' . $image->getClientOriginalExtension();
                    $image->storeAs('public/images', $imageName);
                    $imageNames[] = $imageName;
                }
                $futsal_listings->images = $imageNames;
            }

            // Save changes
            $futsal_listings->save();

            // Return JSON response
            return response()->json(
                [
                    'message' => 'Product successfully updated.',
                ],
                200,
            );
        } catch (\Exception $e) {
            // Return JSON response for error
            return response()->json(
                [
                    'message' => 'Something went really wrong!',
                ],
                500,
            );
        }
    }

    // public function destroy($id)
    // {
    //     // Detail
    //     $futsal_listings = FutsalListings::find($id);
    //     if (!$futsal_listings) {
    //         return response()->json(
    //             [
    //                 'message' => 'Product Not Found.',
    //             ],
    //             404,
    //         );
    //     }

    //     // Public storage
    //     $storage = Storage::disk('public');

    //     // Iamge delete
    //     if ($storage->exists($futsal_listings->image)) {
    //         $storage->delete($futsal_listings->image);
    //     }

    //     // Delete Product
    //     $futsal_listings->delete();

    //     // Return Json Response
    //     return response()->json(
    //         [
    //             'message' => 'Product successfully deleted.',
    //         ],
    //         200,
    //     );
    // }

    public function destroy($id)
    {
        // Find FutsalListing
        $futsal_listings = FutsalListings::find($id);
        if (!$futsal_listings) {
            return response()->json(
                [
                    'message' => 'Futsal Listing Not Found.',
                ],
                404,
            );
        }

        // Public storage
        $storage = Storage::disk('public');

        // Delete each image associated with the FutsalListing
        if (!empty($futsal_listings->images)) {
            foreach ($futsal_listings->images as $image) {
                if ($storage->exists($image)) {
                    $storage->delete($image);
                }
            }
        }

        // Delete the FutsalListing
        $futsal_listings->delete();

        // Return JSON response
        return response()->json(
            [
                'message' => 'Futsal Listing successfully deleted.',
            ],
            200,
        );
    }
}
