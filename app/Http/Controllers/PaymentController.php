<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\RedirectResponse;

class PaymentController extends Controller
{
    public function verify(Request $request)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Key ' . env('KHALTI_SECRET_KEY'),
        ])->post('https://khalti.com/api/v2/payment/verify/', [
            'token' => $request->token,
            'amount' => $request->amount,
        ]);
        if ($response->successful()) {
            return back()->with(['success' => true, 'message' => 'Payment successful!']);
        } else {
            // Include more detailed error handling as needed
            return response()->with(['success' => false, 'message' => 'Payment failed!', 'details' => $response->json()], 422);
        }

        // if ($response->successful()) {
        //     // Wrap the response data into an Inertia response
        //     return Inertia::render('Payment/PaymentSuccess', [
        //         'paymentDetails' => $response->json(),
        //     ]);
        // } else {
        //     // Handle errors similarly
        //     return Inertia::render('Payment/PaymentError', [
        //         'error' => $response->json(),
        //         'status' => $response->status(),
        //     ]);
        // }
        //     $payload = $request->all(); // Be sure to validate and sanitize inputs appropriately
        //     Log::info($payload);

        //     try {
        //         $response = Http::withHeaders([
        //             'Authorization' => 'Key ' . env('KHALTI_SECRET_KEY'),
        //         ])->post('https://a.khalti.com/api/v2/epayment/initiate/', $payload);
        //         Log::info($response);
        //         if ($response->successful()) {
        //             // You can choose to directly redirect or pass the URL back to the frontend
        //             return response()->json(['payment_url' => $response->json()['payment_url']]);
        //         } else {
        //             return response()->json($response->json(), $response->status());
        //         }
        //     } catch (\Exception $e) {
        //         return response()->json(['message' => 'Request failed', 'error' => $e->getMessage()], 500);
    }
}
