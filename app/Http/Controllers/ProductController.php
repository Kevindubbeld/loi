<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\ListCategorieenRequest;

class ProductController extends Controller
{
    /**
     * Return the list of categories.
     *
     * @return array
     */
    public function index(): array
    {
        return [
        ];
    }

    /**
     * Return the details of a specific product.
     *
     * @param int $id
     * @return product
     */
    public function show(int $id): ?array
    {
        return null;
    }
}
