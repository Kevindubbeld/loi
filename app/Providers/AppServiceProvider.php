<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Ensure the database schema is created
        Schema::defaultStringLength(191);

        // Automatically run migrations and seed the database if using an in-memory database
        if (config('database.default') === 'sqlite' && config('database.connections.sqlite.database') === ':memory:') {
            $this->callMigrationsAndSeeders();
        }
    }

    /**
     * Run the migrations and seeders.
     */
    protected function callMigrationsAndSeeders(): void
    {
        \Artisan::call('migrate');
        \Artisan::call('db:seed');
    }
}
