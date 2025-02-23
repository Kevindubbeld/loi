<?php

use App\Http\Controllers\CategorieenController;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\ListCategorieenRequest;

Route::get('/api/categories', [CategorieenController::class, 'index']);
