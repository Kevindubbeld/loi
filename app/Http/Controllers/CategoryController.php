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
use Illuminate\Support\Facades\DB;
use App\Models\SubCategory;

class CategoryController extends Controller
{
    /**
     * Return the list of categories.
     *
     * @return array
     */
    public function index(): array
    {
        return DB::table('categories')->get()->toArray();
    }

    /**
     * Return the details of a specific category.
     *
     * @param int $id
     * @return array|null
     */
    public function show(int $id): ?array
    {
        $category = DB::table('categories')->where('id', $id)->first();
        if ($category) {
            $subCategories = SubCategory::with('products')->where('category_id', $id)->get();
            $category->subcategories = $subCategories->toArray();
            return (array) $category;
        }
        return null;
    }
}
