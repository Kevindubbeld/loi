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
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Return the list of products.
     *
     * @return array
     */
    public function index(): array
    {
        return Product::all()->toArray();
    }

    /**
     * Return the details of a specific product.
     *
     * @param int $id
     * @return Product|null
     */
    public function show(int $id): ?Product
    {
        $product = Product::find($id);

        if (!$product) {
            return null;
        }

        return $product;
    }
}
