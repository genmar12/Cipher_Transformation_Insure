<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecureHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle($request, Closure $next)
{
    $response = $next($request);

    return $response->header('X-Frame-Options', 'SAMEORIGIN')
        ->header('X-Content-Type-Options', 'nosniff')
        ->header('X-XSS-Protection', '1; mode=block');
}
}
