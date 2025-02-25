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
                'sub_category_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipfilet',
                'price' => 5.99,
                'short_description' => 'Verse kipfilet per 500g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/12122024_1734017700588_1734017707185_2378607000000_1.png',
                'quantity' => 100,
            ],
            [
                'sub_category_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipdrumsticks',
                'price' => 4.99,
                'short_description' => 'Verse kipdrumsticks per 500g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820972327_1730821013982_2378613000000_1.png',
                'quantity' => 150,
            ],
            [
                'sub_category_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipdijfilet',
                'price' => 6.99,
                'short_description' => 'Verse kipdijfilet per 500g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/17102024_1729157646478_1729157662073_2335881000000_1.png',
                'quantity' => 120,
            ],
            [
                'sub_category_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipgehakt',
                'price' => 5.49,
                'short_description' => 'Vers kipgehakt per 500g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820973073_1730820990171_8718452850457_1.png',
                'quantity' => 200,
            ],
            [
                'sub_category_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipfilet gesneden',
                'price' => 5.99,
                'short_description' => 'Verse kipfilet met vel per 500g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/30012025_1738251168101_1738251174625_2369922000000_1.png',
                'quantity' => 180,
            ],
            [
                'sub_category_id' => $kippenvleesSubCategory->id,
                'name' => 'Kipfilethaasjes',
                'price' => 5.99,
                'short_description' => 'Kipfilethaasjes Voorgegaard 6 Stuks',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/21022025_1740151973618_1740151980651_8718452886951_1.png',
                'quantity' => 130,
            ],
            [
                'sub_category_id' => $kippenvleesSubCategory->id,
                'name' => 'Cordon Bleu',
                'price' => 6.49,
                'short_description' => 'Scharrelkip Cordon Bleu 2 Stuks',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820972141_1730820990986_8718452684144_1.png',
                'quantity' => 90,
            ],
            [
                'sub_category_id' => $kippenvleesSubCategory->id,
                'name' => 'Kip Shoarma',
                'price' => 5.99,
                'short_description' => 'Verse Kip Shoarma Dijfilet 500g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820973386_1730821013790_8718452850464_1.png',
                'quantity' => 110,
            ],
            [
                'sub_category_id' => $rundervleesSubCategory->id,
                'name' => 'Runderreepjes',
                'price' => 5.65,
                'short_description' => 'Vers Runderreepjes ca. 300 g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/09082023_1691585002612_1691585020359_2333762000000_1.png',
                'quantity' => 140,
            ],
            [
                'sub_category_id' => $rundervleesSubCategory->id,
                'name' => 'Kogelbiefstuk',
                'price' => 8.23,
                'short_description' => 'Verse Kogelbiefstuk ca. 200 g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/09082023_1691585002612_1691585020359_2333762000000_1.png',
                'quantity' => 80,
            ],
            [
                'sub_category_id' => $appelsSubCategory->id,
                'name' => 'Jonagold Appels',
                'price' => 2.99,
                'short_description' => 'Heerlijke Jonagold appels per kg',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/29092023_1695995626316_1695995631076_8711715881748_1.png',
                'quantity' => 300,
            ],
            [
                'sub_category_id' => $appelsSubCategory->id,
                'name' => 'Elstar Appels',
                'price' => 3.49,
                'short_description' => 'Verse Elstar appels per kg',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/10082023_1691677392872_1691677395732_8711715881755_1.png',
                'quantity' => 250,
            ],
            [
                'sub_category_id' => $bananenSubCategory->id,
                'name' => 'Bananen',
                'price' => 1.99,
                'short_description' => 'Rijpe bananen per kg',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/04022025_1738679565474_1738679569587_8718452709458_1.png',
                'quantity' => 400,
            ],
            [
                'sub_category_id' => $melkSubCategory->id,
                'name' => 'Volle Melk',
                'price' => 0.99,
                'short_description' => 'Verse volle melk 1L',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/04062024_1717490780567_1717490789623_8718452645220_596.png',
                'quantity' => 500,
            ],
            [
                'sub_category_id' => $melkSubCategory->id,
                'name' => 'Halfvolle Melk',
                'price' => 0.89,
                'short_description' => 'Verse halfvolle melk 1L',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/29032024_1711693986752_1711693995195_8718452753383_596.png',
                'quantity' => 450,
            ],
            [
                'sub_category_id' => $kaasSubCategory->id,
                'name' => 'Goudse Kaas',
                'price' => 7.99,
                'short_description' => 'Goudse kaas per 500g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/14112023_1699975989714_1699976002168_8718452695102_1.png',
                'quantity' => 60,
            ],
            [
                'sub_category_id' => $kaasSubCategory->id,
                'name' => 'Edammer Kaas',
                'price' => 6.99,
                'short_description' => 'Edammer kaas per 500g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/10082023_1691674996666_1691675028548_8710912303428_1.png',
                'quantity' => 70,
            ],
            [
                'sub_category_id' => $broodSubCategory->id,
                'name' => 'Wit Brood',
                'price' => 1.49,
                'short_description' => 'Vers wit brood',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/19042024_1713526452274_1713526458149_8718452636488_1.png',
                'quantity' => 200,
            ],
            [
                'sub_category_id' => $broodSubCategory->id,
                'name' => 'Bruin Brood',
                'price' => 1.69,
                'short_description' => 'Vers bruin brood',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/22042024_1713800058771_1713800062878_8718452652839_1.png',
                'quantity' => 180,
            ],
            [
                'sub_category_id' => $gebakSubCategory->id,
                'name' => 'Appeltaart',
                'price' => 4.99,
                'short_description' => 'Heerlijke appeltaart',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/21082024_1724250854682_1724250864172_8718452871728_1.png',
                'quantity' => 50,
            ],
            [
                'sub_category_id' => $gebakSubCategory->id,
                'name' => 'Slagroomtaart',
                'price' => 5.99,
                'short_description' => 'Heerlijke slagroomtaart',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/18092023_1695042191356_1695042196806_8718452476121_1.png',
                'quantity' => 40,
            ],
            [
                'sub_category_id' => $frisdrankSubCategory->id,
                'name' => 'Cola',
                'price' => 1.49,
                'short_description' => 'Verfrissende cola 1.5L',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/12012024_1705031790215_1705031798140_429169_PAK_05000112646856_H1N1.png',
                'quantity' => 300,
            ],
            [
                'sub_category_id' => $frisdrankSubCategory->id,
                'name' => 'Sinas',
                'price' => 1.49,
                'short_description' => 'Verfrissende sinas 1.5L',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/17072024_1721205201114_1721205213174_8718452800568_596.png',
                'quantity' => 280,
            ],
            [
                'sub_category_id' => $sapSubCategory->id,
                'name' => 'Appelsap',
                'price' => 1.99,
                'short_description' => 'Verse appelsap 1L',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/17092024_1726580061742_1726580070150_8718452648955_1.png',
                'quantity' => 220,
            ],
            [
                'sub_category_id' => $sapSubCategory->id,
                'name' => 'Sinaasappelsap',
                'price' => 2.49,
                'short_description' => 'Verse sinaasappelsap 1L',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/12122024_1734021201864_1734021213353_8718452864331_596.png',
                'quantity' => 210,
            ],
            [
                'sub_category_id' => $chipsSubCategory->id,
                'name' => 'Paprika Chips',
                'price' => 1.29,
                'short_description' => 'Heerlijke paprika chips 200g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/10012025_1736526807134_1736526812871_8710398532244_1.png',
                'quantity' => 400,
            ],
            [
                'sub_category_id' => $chipsSubCategory->id,
                'name' => 'Naturel Chips',
                'price' => 1.29,
                'short_description' => 'Heerlijke naturel chips 200g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/13012025_1736767986445_1736767991140_8710398532268_1.png',
                'quantity' => 380,
            ],
            [
                'sub_category_id' => $chocoladeSubCategory->id,
                'name' => 'Chocolade Melk',
                'price' => 1.99,
                'short_description' => 'Heerlijke melkchocolade 100g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/24122024_1735006348869_1735006356351_75729_PAK_08712800188322_H1N1.png',
                'quantity' => 500,
            ],
            [
                'sub_category_id' => $chocoladeSubCategory->id,
                'name' => 'Pure Chocolade',
                'price' => 2.49,
                'short_description' => 'Heerlijke pure chocolade 100g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/15012025_1736906636209_1736906657027_73780_PAK_07622400013423_C1N1_s01.png',
                'quantity' => 450,
            ],
            [
                'sub_category_id' => $pizzaSubCategory->id,
                'name' => 'Margherita Pizza',
                'price' => 3.99,
                'short_description' => 'Heerlijke Margherita pizza',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/06052024_1714998812790_1714998822423_4001724604501_1.png',
                'quantity' => 120,
            ],
            [
                'sub_category_id' => $pizzaSubCategory->id,
                'name' => 'Salami Pizza',
                'price' => 4.49,
                'short_description' => 'Heerlijke Salami pizza',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/26042024_1714127650071_1714127684048_8718452777020_596.png',
                'quantity' => 110,
            ],
            [
                'sub_category_id' => $ijsSubCategory->id,
                'name' => 'Vanille IJs',
                'price' => 2.99,
                'short_description' => 'Heerlijk vanille ijs 500ml',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/26062024_1719412466335_1719412472977_8718452774548_1.png',
                'quantity' => 90,
            ],
            [
                'sub_category_id' => $ijsSubCategory->id,
                'name' => 'Chocolade IJs',
                'price' => 3.49,
                'short_description' => 'Heerlijk chocolade ijs 500ml',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/12042024_1712946979301_1712946987806_8718452773664_1.png',
                'quantity' => 80,
            ],
            [
                'sub_category_id' => $basilicumSubCategory->id,
                'name' => 'Verse Basilicum',
                'price' => 1.99,
                'short_description' => 'Verse basilicum 30g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/11102024_1728660847285_1728660853781_8718452841981_1.png',
                'quantity' => 300,
            ],
            [
                'sub_category_id' => $peterselieSubCategory->id,
                'name' => 'Verse Peterselie',
                'price' => 1.99,
                'short_description' => 'Verse peterselie 30g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/29072024_1722270917081_1722270923850_8718452796403_1.png',
                'quantity' => 320,
            ],
            [
                'sub_category_id' => $schoonmaakmiddelenSubCategory->id,
                'name' => 'Allesreiniger',
                'price' => 2.99,
                'short_description' => 'Allesreiniger 1L',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/29092023_1695996695829_1695996698370_8718452727469_1.png',
                'quantity' => 150,
            ],
            [
                'sub_category_id' => $schoonmaakmiddelenSubCategory->id,
                'name' => 'Glasreiniger',
                'price' => 2.49,
                'short_description' => 'Glasreiniger 1L',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/29092023_1695996695795_1695996699357_8718452727445_1.png',
                'quantity' => 140,
            ],
            [
                'sub_category_id' => $papierwarenSubCategory->id,
                'name' => 'Toiletpapier',
                'price' => 3.99,
                'short_description' => 'Toiletpapier 6 rollen',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/09082023_1691593426401_1691593434792_8718452707584_1.png',
                'quantity' => 200,
            ],
            [
                'sub_category_id' => $papierwarenSubCategory->id,
                'name' => 'Keukenpapier',
                'price' => 2.99,
                'short_description' => 'Keukenpapier 4 rollen',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/21112023_1700580790012_1700580801377_8718452789474_1.png',
                'quantity' => 180,
            ],
            [
                'sub_category_id' => $babyvoedingSubCategory->id,
                'name' => 'Babyvoeding',
                'price' => 4.99,
                'short_description' => 'Babyvoeding 400g',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/24072024_1721835319962_1721835325291_8445290844170_1.png',
                'quantity' => 100,
            ],
            [
                'sub_category_id' => $luiersSubCategory->id,
                'name' => 'Luiers',
                'price' => 8.99,
                'short_description' => 'Luiers maat 4, 50 stuks',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/20022025_1740021736618_1740021738040_561257_STK_08700216366755_C1N1.png',
                'quantity' => 80,
            ],
            [
                'sub_category_id' => $hondenvoerSubCategory->id,
                'name' => 'Hondenvoer',
                'price' => 5.99,
                'short_description' => 'Hondenvoer 2kg',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/25042024_1714055710143_1714055715112_8718452532216_1.png',
                'quantity' => 150,
            ],
            [
                'sub_category_id' => $kattenvoerSubCategory->id,
                'name' => 'Kattenvoer',
                'price' => 4.99,
                'short_description' => 'Kattenvoer 2kg',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/02042024_1712068508793_1712068535830_8718452746439_596.png',
                'quantity' => 140,
            ],
            [
                'sub_category_id' => $vitaminesSubCategory->id,
                'name' => 'Multivitamines',
                'price' => 9.99,
                'short_description' => 'Multivitamines 60 tabletten',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/22022025_1740186093943_1740186100079_8713713023588_1.png',
                'quantity' => 200,
            ],
            [
                'sub_category_id' => $verzorgingsproductenSubCategory->id,
                'name' => 'Shampoo',
                'price' => 3.99,
                'short_description' => 'Shampoo 500ml',
                'img_url' => 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/28092023_1695890048436_1695890051564_8720181327698_1.png',
                'quantity' => 180,
            ],
            [
                'sub_category_id' => $verzorgingsproductenSubCategory->id,
                'name' => 'Douchegel',
                'price' => 2.99,
                'short_description' => 'Douchegel 500ml',
                'img_url' => 'http://jumbo.com/dam-images/fit-in/360x360/Products/22012025_1737545567748_1737545573039_8710447284094_1.png',
                'quantity' => 150,
            ],
        ]);
    }
}
