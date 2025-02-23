<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\SubCategory;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kippenvleesSubCategory = SubCategory::where('name', 'Kippenvlees')->first();
        $rundervleesSubCategory = SubCategory::where('name', 'Rundervlees')->first();
        $appelsSubCategory = SubCategory::where('name', 'Appels')->first();
        $bananenSubCategory = SubCategory::where('name', 'Bananen')->first();
        $melkSubCategory = SubCategory::where('name', 'Melk')->first();
        $kaasSubCategory = SubCategory::where('name', 'Kaas')->first();
        $broodSubCategory = SubCategory::where('name', 'Brood')->first();
        $gebakSubCategory = SubCategory::where('name', 'Gebak')->first();
        $frisdrankSubCategory = SubCategory::where('name', 'Frisdrank')->first();
        $sapSubCategory = SubCategory::where('name', 'Sap')->first();
        $chipsSubCategory = SubCategory::where('name', 'Chips')->first();
        $chocoladeSubCategory = SubCategory::where('name', 'Chocolade')->first();
        $pizzaSubCategory = SubCategory::where('name', 'Pizza')->first();
        $ijsSubCategory = SubCategory::where('name', 'IJs')->first();
        $basilicumSubCategory = SubCategory::where('name', 'Basilicum')->first();
        $peterselieSubCategory = SubCategory::where('name', 'Peterselie')->first();
        $schoonmaakmiddelenSubCategory = SubCategory::where('name', 'Schoonmaakmiddelen')->first();
        $papierwarenSubCategory = SubCategory::where('name', 'Papierwaren')->first();
        $babyvoedingSubCategory = SubCategory::where('name', 'Babyvoeding')->first();
        $luiersSubCategory = SubCategory::where('name', 'Luiers')->first();
        $hondenvoerSubCategory = SubCategory::where('name', 'Hondenvoer')->first();
        $kattenvoerSubCategory = SubCategory::where('name', 'Kattenvoer')->first();
        $vitaminesSubCategory = SubCategory::where('name', 'Vitamines')->first();
        $verzorgingsproductenSubCategory = SubCategory::where('name', 'Verzorgingsproducten')->first();

        DB::table('products')->insert([
            [
                'subcategory_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipfilet',
                'price' => 5.99,
                'description' => 'Verse kipfilet per 500g',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/12122024_1734017700588_1734017707185_2378607000000_1.png',
            ],
            [
                'subcategory_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipdrumsticks',
                'price' => 4.99,
                'description' => 'Verse kipdrumsticks per 500g',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820972327_1730821013982_2378613000000_1.png',
            ],
            [
                'subcategory_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipdijfilet',
                'price' => 6.99,
                'description' => 'Verse kipdijfilet per 500g',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/17102024_1729157646478_1729157662073_2335881000000_1.png',
            ],
            [
                'subcategory_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipgehakt',
                'price' => 5.49,
                'description' => 'Vers kipgehakt per 500g',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820973073_1730820990171_8718452850457_1.png',
            ],
            [
                'subcategory_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipfilet gesneden',
                'price' => 5.99,
                'description' => 'Verse kipfilet met vel per 500g',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/30012025_1738251168101_1738251174625_2369922000000_1.png',
            ],
            [
                'subcategory_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipfilethaasjes',
                'price' => 5.99,
                'description' => 'Kipfilethaasjes Voorgegaard 6 Stuks',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/21022025_1740151973618_1740151980651_8718452886951_1.png',
            ],
            [
                'subcategory_id' => $kippenvleesSubCategory->id,
                'name' => 'Cordon Bleu',
                'price' => 6.49,
                'description' => 'Scharrelkip Cordon Bleu 2 Stuks',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820972141_1730820990986_8718452684144_1.png',
            ],
            [
                'subcategory_id' => $kippenvleesSubCategory->id,
                'name' => 'Kip Shoarma',
                'price' => 5.99,
                'description' => 'Verse Kip Shoarma Dijfilet 500g',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820973386_1730821013790_8718452850464_1.png',
            ],
            [
                'subcategory_id' => $rundervleesSubCategory->id,
                'name' => 'Runderreepjes',
                'price' => 5.65,
                'description' => 'Vers Runderreepjes ca. 300 g',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/09082023_1691585002612_1691585020359_2333762000000_1.png',
            ],
            [
                'subcategory_id' => $rundervleesSubCategory->id,
                'name' => 'Kogelbiefstuk',
                'price' => 8.23,
                'description' => 'Verse Kogelbiefstuk ca. 200 g',
                'image' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/09082023_1691585002612_1691585020359_2333762000000_1.png',
            ],
            [
                'subcategory_id' => $appelsSubCategory->id,
                'name' => 'Jonagold Appels',
                'price' => 2.99,
            ],
            [
                'subcategory_id' => $appelsSubCategory->id,
                'name' => 'Elstar Appels',
                'price' => 3.49,
            ],
            [
                'subcategory_id' => $bananenSubCategory->id,
                'name' => 'Bananen',
                'price' => 1.99,
            ],
            [
                'subcategory_id' => $melkSubCategory->id,
                'name' => 'Volle Melk',
                'price' => 0.99,
            ],
            [
                'subcategory_id' => $melkSubCategory->id,
                'name' => 'Halfvolle Melk',
                'price' => 0.89,
            ],
            [
                'subcategory_id' => $kaasSubCategory->id,
                'name' => 'Goudse Kaas',
                'price' => 7.99,
            ],
            [
                'subcategory_id' => $kaasSubCategory->id,
                'name' => 'Edammer Kaas',
                'price' => 6.99,
            ],
            [
                'subcategory_id' => $broodSubCategory->id,
                'name' => 'Wit Brood',
                'price' => 1.49,
            ],
            [
                'subcategory_id' => $broodSubCategory->id,
                'name' => 'Bruin Brood',
                'price' => 1.69,
            ],
            [
                'subcategory_id' => $gebakSubCategory->id,
                'name' => 'Appeltaart',
                'price' => 4.99,
            ],
            [
                'subcategory_id' => $gebakSubCategory->id,
                'name' => 'Slagroomtaart',
                'price' => 5.99,
            ],
            [
                'subcategory_id' => $frisdrankSubCategory->id,
                'name' => 'Cola',
                'price' => 1.49,
            ],
            [
                'subcategory_id' => $frisdrankSubCategory->id,
                'name' => 'Sinas',
                'price' => 1.49,
            ],
            [
                'subcategory_id' => $sapSubCategory->id,
                'name' => 'Appelsap',
                'price' => 1.99,
            ],
            [
                'subcategory_id' => $sapSubCategory->id,
                'name' => 'Sinaasappelsap',
                'price' => 2.49,
            ],
            [
                'subcategory_id' => $chipsSubCategory->id,
                'name' => 'Paprika Chips',
                'price' => 1.29,
            ],
            [
                'subcategory_id' => $chipsSubCategory->id,
                'name' => 'Naturel Chips',
                'price' => 1.29,
            ],
            [
                'subcategory_id' => $chocoladeSubCategory->id,
                'name' => 'Melkchocolade',
                'price' => 1.99,
            ],
            [
                'subcategory_id' => $chocoladeSubCategory->id,
                'name' => 'Pure Chocolade',
                'price' => 2.49,
            ],
            [
                'subcategory_id' => $pizzaSubCategory->id,
                'name' => 'Margherita Pizza',
                'price' => 3.99,
            ],
            [
                'subcategory_id' => $pizzaSubCategory->id,
                'name' => 'Salami Pizza',
                'price' => 4.49,
            ],
            [
                'subcategory_id' => $ijsSubCategory->id,
                'name' => 'Vanille IJs',
                'price' => 2.99,
            ],
            [
                'subcategory_id' => $ijsSubCategory->id,
                'name' => 'Chocolade IJs',
                'price' => 3.49,
            ],
            [
                'subcategory_id' => $basilicumSubCategory->id,
                'name' => 'Verse Basilicum',
                'price' => 1.99,
            ],
            [
                'subcategory_id' => $peterselieSubCategory->id,
                'name' => 'Verse Peterselie',
                'price' => 1.99,
            ],
            [
                'subcategory_id' => $schoonmaakmiddelenSubCategory->id,
                'name' => 'Allesreiniger',
                'price' => 2.99,
            ],
            [
                'subcategory_id' => $schoonmaakmiddelenSubCategory->id,
                'name' => 'Glasreiniger',
                'price' => 2.49,
            ],
            [
                'subcategory_id' => $papierwarenSubCategory->id,
                'name' => 'Toiletpapier',
                'price' => 3.99,
            ],
            [
                'subcategory_id' => $papierwarenSubCategory->id,
                'name' => 'Keukenpapier',
                'price' => 2.99,
            ],
            [
                'subcategory_id' => $babyvoedingSubCategory->id,
                'name' => 'Babyvoeding',
                'price' => 4.99,
            ],
            [
                'subcategory_id' => $luiersSubCategory->id,
                'name' => 'Luiers',
                'price' => 8.99,
            ],
            [
                'subcategory_id' => $hondenvoerSubCategory->id,
                'name' => 'Hondenvoer',
                'price' => 5.99,
            ],
            [
                'subcategory_id' => $kattenvoerSubCategory->id,
                'name' => 'Kattenvoer',
                'price' => 4.99,
            ],
            [
                'subcategory_id' => $vitaminesSubCategory->id,
                'name' => 'Multivitamines',
                'price' => 9.99,
            ],
            [
                'subcategory_id' => $verzorgingsproductenSubCategory->id,
                'name' => 'Shampoo',
                'price' => 3.99,
            ],
            [
                'subcategory_id' => $verzorgingsproductenSubCategory->id,
                'name' => 'Douchegel',
                'price' => 2.99,
            ],
        ]);
    }
}
