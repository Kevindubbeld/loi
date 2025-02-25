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
                'img_url' => 'https://image.parool.nl/234310914/width/2480/waarom-zijn-appels-van-dichtbij-toch-duurder',
            ],
            [
                'category_id' => $groentenEnFruitCategory->id,
                'name' => 'Bananen',
                'img_url' => 'https://image.parool.nl/234310914/width/2480/waarom-zijn-appels-van-dichtbij-toch-duurder',
            ],
            [
                'category_id' => $zuivelEnEierenCategory->id,
                'name' => 'Melk',
                'img_url' => 'https://www.shutterstock.com/image-vector/natural-milk-symbol-logo-pouring-260nw-405290065.jpg',
            ],
            [
                'category_id' => $zuivelEnEierenCategory->id,
                'name' => 'Kaas',
                'img_url' => 'https://img.freepik.com/premium-vector/kaas-eten-logo-merk-product-cartoon-stijl-vector-illustratie-supermarkt-logo-bewerkbare-tekst_521317-1165.jpg',
            ],
            [
                'category_id' => $broodEnBanketCategory->id,
                'name' => 'Brood',
                'img_url' => 'https://img.freepik.com/premium-vector/vectorillustratie-van-het-ontwerp-van-het-broodlogo_1249925-3642.jpg',
            ],
            [
                'category_id' => $broodEnBanketCategory->id,
                'name' => 'Gebak',
                'img_url' => 'https://i.etsystatic.com/41769818/r/il/ef024f/5453017465/il_794xN.5453017465_3rph.jpg',
            ],
            [
                'category_id' => $drankenCategory->id,
                'name' => 'Frisdrank',
                'img_url' => 'https://www.creativefabrica.com/wp-content/uploads/2019/09/26/Soda-drink-filled-line-icon-logo-design-by-graphicrun123-580x386.jpg',
            ],
            [
                'category_id' => $drankenCategory->id,
                'name' => 'Sap',
                'img_url' => 'https://img.freepik.com/premium-vector/unique-orange-juice-logo-design_301434-36.jpg',
            ],
            [
                'category_id' => $snacksEnSnoepCategory->id,
                'name' => 'Chips',
                'img_url' => 'https://static.vecteezy.com/ti/gratis-vector/p1/47929385-logo-aardappel-chips-voedsel-en-tussendoortje-logo-met-gemakkelijk-aardappel-tekenfilm-uniek-voedsel-tussendoortje-chips-bedrijf-identiteit-icoon-geisoleerd-aan-wit-achtergrond-vector.jpg',
            ],
            [
                'category_id' => $snacksEnSnoepCategory->id,
                'name' => 'Chocolade',
                'img_url' => 'https://static.vecteezy.com/ti/gratis-vector/p1/7909755-premium-chocolade-logo-badge-concept-vector.jpg',
            ],
            [
                'category_id' => $diepvriesCategory->id,
                'name' => 'Pizza',
                'img_url' => 'https://img.freepik.com/premium-vector/italiaans-pizza-logo-met-een-pizza-en-een-chef-kok-die-een-pizza-vasthoudt_850580-18.jpg?semt=ais_hybrid',
            ],
            [
                'category_id' => $diepvriesCategory->id,
                'name' => 'IJs',
                'img_url' => 'https://img.freepik.com/premium-vector/ijs-logo_9845-160.jpg',
            ],
            [
                'category_id' => $kruidenCategory->id,
                'name' => 'Basilicum',
                'img_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OZYzjh_x5FbajOmptHvmv_ZgQiKbDoEDBw&s',
            ],
            [
                'category_id' => $kruidenCategory->id,
                'name' => 'Peterselie',
                'img_url' => 'https://as2.ftcdn.net/v2/jpg/02/55/09/65/1000_F_255096564_pSBBigAkmr4LeUl5QDHQ3I0sTLPpC0Fr.jpg',
            ],
            [
                'category_id' => $nonFoodCategory->id,
                'name' => 'Schoonmaakmiddelen',
                'img_url' => 'https://i.pinimg.com/originals/7d/94/d7/7d94d75004dfc1c8588cb83badcac35d.jpg',
            ],
            [
                'category_id' => $nonFoodCategory->id,
                'name' => 'Papierwaren',
                'img_url' => 'https://img.freepik.com/premium-vector/papier-pictogram-logo-vector-ontwerpsjabloon_827767-3381.jpg',
            ],
            [
                'category_id' => $babyvoedselCategory->id,
                'name' => 'Babyvoeding',
                'img_url' => 'https://i.pinimg.com/736x/e9/23/ae/e923ae91181f5518fae131110274b682.jpg',
            ],
            [
                'category_id' => $babyvoedselCategory->id,
                'name' => 'Luiers',
                'img_url' => 'https://media.istockphoto.com/id/1196964244/nl/vector/baby-luiers-pictogram-vector-ge%C3%AFsoleerde-contour-symbool-illustratie.jpg?s=612x612&w=0&k=20&c=lt2HufdIcS2qKEvcxMPeP1dr3U25bRHeFNCRKDFUJOA=',
            ],
            [
                'category_id' => $huisdierenCategory->id,
                'name' => 'Hondenvoer',
                'img_url' => 'https://img.freepik.com/vrije-vector/zittende-bruine-puppy-hond-logo-sjabloon_1051-3347.jpg',
            ],
            [
                'category_id' => $huisdierenCategory->id,
                'name' => 'Kattenvoer',
                'img_url' => 'https://perfectekat.nl/wp-content/uploads/2020/05/cropped-Nieuw-Logo-e1674566823700.png',
            ],
            [
                'category_id' => $gezondheidEnVerzorgingCategory->id,
                'name' => 'Vitamines',
                'img_url' => 'https://www.smarfer.com/wp-content/uploads/2024/05/vitamines.webp',
            ],
            [
                'category_id' => $gezondheidEnVerzorgingCategory->id,
                'name' => 'Verzorgingsproducten',
                'img_url' => 'https://www.shutterstock.com/image-vector/beautiful-woman-face-logo-hair-600nw-2436321179.jpg',
            ],
        ]);
    }
}
