<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Bepaal of de applicatie in onderhoudsmodus is...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Registreer de Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel en verwerk het verzoek...
(require_once __DIR__.'/../bootstrap/app.php')
    ->handleRequest(Request::capture());
