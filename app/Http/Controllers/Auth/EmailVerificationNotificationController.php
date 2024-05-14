<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        $user = $request->user();
        Log::info($user);
        if (!$user) {
            // Redirect to login or handle the case where there is no authenticated user
            return redirect()->route('login')->with('error', 'Please login to verify your email.');
        }
        Log::info('Checking user email: ' . $user->email);
        if ($user->email_verified_at) {
            Log::info('Email already verified.');
        } else {
            Log::info('Sending verification email.');
            try {
                $user->sendEmailVerificationNotification();
            } catch (\Exception $e) {
                Log::error('Failed to send email verification notification: ' . $e->getMessage());
                return back()->with('error', 'Failed to send verification email. Please try again later.');
            }
        }

        return back()->with('status', 'verification-link-sent');
    }
}
