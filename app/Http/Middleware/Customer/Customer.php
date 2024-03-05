<?php

namespace App\Http\Middleware\Customer;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Auth;

class Customer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::guard('customer')->check()) {
            return redirect()->route('customer.login')->with('error', 'You must be logged in to access this page.');
            
        }
        return $next($request);
    }
}
