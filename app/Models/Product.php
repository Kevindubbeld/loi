<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'sub_category_id',
        'name',
        'short_description',
        'long_description',
        'price',
        'quantity',
        'img_url',
    ];

    public function subcategory()
    {
        return $this->belongsTo(SubCategory::class);
    }
}
