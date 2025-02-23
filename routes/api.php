<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\ListCategorieenRequest;

Route::get('/api/category', [CategoryController::class, 'index']);
Route::get('/api/category/{id}', [CategoryController::class, 'show']);
Route::get('/api/product/{id}', [ProductController::class, 'show']);
