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

class FutsalListingsController extends Controller
{
    public function index()
    {
        $futsal_listings = FutsalListings::all();

        return Inertia::render('Customer/FutsalListings/index', [
            'futsal_listings' => $futsal_listings,
        ]);
    }

    public function store(FutsalListingsRequest $request)
    {
        try {
            $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();

            // Create Product
            FutsalListings::create([
                'title' => $request->title,
                'description' => $request->description,
                'location' => $request->location,
                'price' => $request->price,
                'image' => $imageName,
            ]);

            // Save Image in Storage folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            // Redirect back to a specific page (e.g., futsal-listings.index)
            return Redirect::route('futsal-listings.index')->with('success', 'Futsal listing created successfully.');
        } catch (\Exception $e) {
            // Handle exceptions and redirect back with an error message
            return Redirect::back()
                ->withInput()
                ->withErrors(['error' => 'Something went really wrong!']);
        }
    }

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

            //echo "request : $request->image";
            $futsal_listings->title = $request->title;
            $futsal_listings->description = $request->description;
            $futsal_listings->location = $request->location;
            $futsal_listings->price = $request->price;

            if ($request->image) {
                // Public storage
                $storage = Storage::disk('public');

                // Old iamge delete
                if ($storage->exists($product->image)) {
                    $storage->delete($product->image);
                }

                // Image name
                $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
                $futsal_listings->image = $imageName;

                // Image save in public folder
                $storage->put($imageName, file_get_contents($request->image));
            }

            // Update Product
            $futsal_listings->save();

            // Return Json Response
            return response()->json(
                [
                    'message' => 'Product successfully updated.',
                ],
                200,
            );
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json(
                [
                    'message' => 'Something went really wrong!',
                ],
                500,
            );
        }
    }

    public function destroy($id)
    {
        // Detail
        $futsal_listings = FutsalListings::find($id);
        if (!$futsal_listings) {
            return response()->json(
                [
                    'message' => 'Product Not Found.',
                ],
                404,
            );
        }

        // Public storage
        $storage = Storage::disk('public');

        // Iamge delete
        if ($storage->exists($futsal_listings->image)) {
            $storage->delete($futsal_listings->image);
        }

        // Delete Product
        $futsal_listings->delete();

        // Return Json Response
        return response()->json(
            [
                'message' => 'Product successfully deleted.',
            ],
            200,
        );
    }
}
