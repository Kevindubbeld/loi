<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Category;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $vleesEnVisCategory = Category::where('name', 'Vlees en Vis')->first();
        $groentenEnFruitCategory = Category::where('name', 'Groenten en Fruit')->first();
        $zuivelEnEierenCategory = Category::where('name', 'Zuivel en Eieren')->first();
        $broodEnBanketCategory = Category::where('name', 'Brood en Banket')->first();
        $drankenCategory = Category::where('name', 'Dranken')->first();
        $snacksEnSnoepCategory = Category::where('name', 'Snacks en Snoep')->first();
        $diepvriesCategory = Category::where('name', 'Diepvries')->first();
        $kruidenCategory = Category::where('name', 'Kruiden')->first();
        $nonFoodCategory = Category::where('name', 'Non-Food')->first();
        $babyvoedselCategory = Category::where('name', 'Babyvoedsel')->first();
        $huisdierenCategory = Category::where('name', 'Huisdieren')->first();
        $gezondheidEnVerzorgingCategory = Category::where('name', 'Gezondheid en Verzorging')->first();

        DB::table('sub_categories')->insert([
            [
                'category_id' => $vleesEnVisCategory->id,
                'name' => 'Kippenvlees',
                'img_url' => 'https://png.pngtree.com/png-clipart/20230812/original/pngtree-fried-chicken-icon-logo-illustration-delicious-wings-lunch-vector-picture-image_10499362.png',
            ],
            [
                'category_id' => $vleesEnVisCategory->id,
                'name' => 'Rundervlees',
                'img_url' => 'https://img.freepik.com/premium-vector/rundvlees-logo-ontwerp-inspiratie-met-badges-en-vintage-stijl_139869-36.jpg?w=1480',
            ],
            [
                'category_id' => $groentenEnFruitCategory->id,
                'name' => 'Appels',
                'img_url' => 'https://example.com/apples.png',
            ],
            [
                'category_id' => $groentenEnFruitCategory->id,
                'name' => 'Bananen',
                'img_url' => 'https://example.com/bananas.png',
            ],
            [
                'category_id' => $zuivelEnEierenCategory->id,
                'name' => 'Melk',
                'img_url' => 'https://example.com/milk.png',
            ],
            [
                'category_id' => $zuivelEnEierenCategory->id,
                'name' => 'Kaas',
                'img_url' => 'https://example.com/cheese.png',
            ],
            [
                'category_id' => $broodEnBanketCategory->id,
                'name' => 'Brood',
                'img_url' => 'https://example.com/bread.png',
            ],
            [
                'category_id' => $broodEnBanketCategory->id,
                'name' => 'Gebak',
                'img_url' => 'https://example.com/pastry.png',
            ],
            [
                'category_id' => $drankenCategory->id,
                'name' => 'Frisdrank',
                'img_url' => 'https://example.com/soda.png',
            ],
            [
                'category_id' => $drankenCategory->id,
                'name' => 'Sap',
                'img_url' => 'https://example.com/juice.png',
            ],
            [
                'category_id' => $snacksEnSnoepCategory->id,
                'name' => 'Chips',
                'img_url' => 'https://example.com/chips.png',
            ],
            [
                'category_id' => $snacksEnSnoepCategory->id,
                'name' => 'Chocolade',
                'img_url' => 'https://example.com/chocolate.png',
            ],
            [
                'category_id' => $diepvriesCategory->id,
                'name' => 'Pizza',
                'img_url' => 'https://example.com/pizza.png',
            ],
            [
                'category_id' => $diepvriesCategory->id,
                'name' => 'IJs',
                'img_url' => 'https://example.com/icecream.png',
            ],
            [
                'category_id' => $kruidenCategory->id,
                'name' => 'Basilicum',
                'img_url' => 'https://example.com/basil.png',
            ],
            [
                'category_id' => $kruidenCategory->id,
                'name' => 'Peterselie',
                'img_url' => 'https://example.com/parsley.png',
            ],
            [
                'category_id' => $nonFoodCategory->id,
                'name' => 'Schoonmaakmiddelen',
                'img_url' => 'https://example.com/cleaning.png',
            ],
            [
                'category_id' => $nonFoodCategory->id,
                'name' => 'Papierwaren',
                'img_url' => 'https://example.com/paper.png',
            ],
            [
                'category_id' => $babyvoedselCategory->id,
                'name' => 'Babyvoeding',
                'img_url' => 'https://example.com/babyfood.png',
            ],
            [
                'category_id' => $babyvoedselCategory->id,
                'name' => 'Luiers',
                'img_url' => 'https://example.com/diapers.png',
            ],
            [
                'category_id' => $huisdierenCategory->id,
                'name' => 'Hondenvoer',
                'img_url' => 'https://example.com/dogfood.png',
            ],
            [
                'category_id' => $huisdierenCategory->id,
                'name' => 'Kattenvoer',
                'img_url' => 'https://example.com/catfood.png',
            ],
            [
                'category_id' => $gezondheidEnVerzorgingCategory->id,
                'name' => 'Vitamines',
                'img_url' => 'https://example.com/vitamins.png',
            ],
            [
                'category_id' => $gezondheidEnVerzorgingCategory->id,
                'name' => 'Verzorgingsproducten',
                'img_url' => 'https://example.com/careproducts.png',
            ],
        ]);
    }
}
