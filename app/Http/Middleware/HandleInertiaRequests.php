<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * De root template die wordt geladen bij het eerste paginabezoek.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Bepaal de huidige assetversie.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Definieer de props die standaard worden gedeeld.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
        ];
    }
}
