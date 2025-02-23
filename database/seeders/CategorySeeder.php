<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'Groenten en Fruit', 'img_url' => 'https://www.schumacher-packaging.com/thumbor/lsORGmtdwZuCXSNbHsy8_lIqZE8=/1920x/www.schumacher-packaging.com/fileadmin/user_upload/home/01_produkte-loesungen/branchenloesungen-packaging/lebensmittel/obst-gemuese/header/header-obst-gemuese-1920x768px.jpg%3F1613151707'],
            ['name' => 'Zuivel en Eieren', 'img_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcRsc9qbK7I0xoN6fruycOoa1jwi6cew2QQ&s'],
            ['name' => 'Vlees en Vis', 'img_url' => 'https://www.lovap.be/storage/images/web/86586cff4174f196288486d83fac8f31-1621945259.jpg'],
            ['name' => 'Brood en Banket', 'img_url' => 'https://www.handtmann.nl/wp-content/uploads/Brood-banket.jpg'],
            ['name' => 'Dranken', 'img_url' => 'https://www.wijnvoordeel.nl/media/catalog/product/g/e/georges_clement_champagne_brut_probeerpakket_1.png?quality=95&fit=bounds&height=400&width=500&bg-color=FFF'],
            ['name' => 'Snacks en Snoep', 'img_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAU6FSS5UeiP3PpUnzjyTNbPMNdJNiRwMyg&s'],
            ['name' => 'Diepvries', 'img_url' => 'https://www.ilgiornale.nl/wp-content/uploads/pizza-supermarkt-test-revieuw-beoordleing-smaak-beste-lekkerste-oetker-AH-jumbo-JPG.jpg'],
            ['name' => 'Kruiden', 'img_url' => 'https://media.s-bol.com/2g4ZqOQ71AKN/550x397.jpg'],
            ['name' => 'Non-Food', 'img_url' => 'https://www.mawsforfinefood.co.uk/media/catalog/category/non_food_LOGO.jpg'],
            ['name' => 'Babyvoedsel', 'img_url' => 'https://media.istockphoto.com/id/530731523/nl/foto/feeding.jpg?s=612x612&w=0&k=20&c=ewYoKl_Rlxl062-nXi94kBVLRXxy3Ovje2VKpX-k7W4='],
            ['name' => 'Huisdieren', 'img_url' => 'https://d147a5vd7kzml6.cloudfront.net/img/appeltern_nl/251877/3005x2000/resize:normal/dieren_en_huisdieren_in_de_tuin.jpg'],
            ['name' => 'Gezondheid en Verzorging', 'img_url' => 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR68DEOqUyhc2nXghQayLmiGsPJY3w0eG4oKSQ2uI2xdhVmF2a53rQxzKXTmEyBpuG8-lgkXAyi0SmRD6TICY0ZPaGU1r_OCagEbP78wYEF7AE-t0VFObzRG2EGD0A1xWHepntLCmGOveE&usqp=CAc']
        ]);
    }
}
