<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

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
            return response()->json(['status' => 'success', 'message' => 'Payment successful!']);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Payment failed!', 'details' => $response->json()], 422);
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
        // Validate request data

        // Here you should handle the API call to Khalti to initiate the payment
        //     try {
        //         $response = Http::withHeaders([
        //             'Authorization' => 'Key ' . env('KHALTI_SECRET_KEY'),
        //         ])->post('https://a.khalti.com/api/v2/epayment/initiate/', [
        //             'payload' => $request->payload,
        //         ]);

        //         if ($response->successful()) {
        //             return response()->json([
        //                 'payment_url' => $response->json()['payment_url'],
        //             ]);
        //         } else {
        //             return response()->json(['error' => 'Failed to initiate payment'], 500);
        //         }
        //     } catch (\Exception $e) {
        //         return response()->json(['error' => $e->getMessage()], 500);
        //     }
    }
}
