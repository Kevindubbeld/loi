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

class CategorieenController extends Controller
{
    /**
     * Return the list of categories.
     *
     * @return array
     */
    public function index(): array
    {
        return [
            ['id' => 1, 'name' => 'Groenten en Fruit', 'image' => 'https://www.schumacher-packaging.com/thumbor/lsORGmtdwZuCXSNbHsy8_lIqZE8=/1920x/www.schumacher-packaging.com/fileadmin/user_upload/home/01_produkte-loesungen/branchenloesungen-packaging/lebensmittel/obst-gemuese/header/header-obst-gemuese-1920x768px.jpg%3F1613151707'],
            ['id' => 2, 'name' => 'Zuivel en Eieren', 'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcRsc9qbK7I0xoN6fruycOoa1jwi6cew2QQ&s'],
            ['id' => 3, 'name' => 'Vlees en Vis', 'image' => 'https://www.lovap.be/storage/images/web/86586cff4174f196288486d83fac8f31-1621945259.jpg'],
            ['id' => 4, 'name' => 'Brood en Banket', 'image' => 'https://www.handtmann.nl/wp-content/uploads/Brood-banket.jpg'],
            ['id' => 5, 'name' => 'Dranken', 'image' => 'https://www.wijnvoordeel.nl/media/catalog/product/g/e/georges_clement_champagne_brut_probeerpakket_1.png?quality=95&fit=bounds&height=400&width=500&bg-color=FFF'],
            ['id' => 6, 'name' => 'Snacks en Snoep', 'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAU6FSS5UeiP3PpUnzjyTNbPMNdJNiRwMyg&s'],
            ['id' => 7, 'name' => 'Diepvries', 'image' => 'https://www.ilgiornale.nl/wp-content/uploads/pizza-supermarkt-test-revieuw-beoordleing-smaak-beste-lekkerste-oetker-AH-jumbo-JPG.jpg'],
            ['id' => 8, 'name' => 'Kruiden', 'image' => 'https://media.s-bol.com/2g4ZqOQ71AKN/550x397.jpg'],
            ['id' => 9, 'name' => 'Non-Food', 'image' => 'https://www.mawsforfinefood.co.uk/media/catalog/category/non_food_LOGO.jpg'],
            ['id' => 10, 'name' => 'Babyvoedsel', 'image' => 'https://media.istockphoto.com/id/530731523/nl/foto/feeding.jpg?s=612x612&w=0&k=20&c=ewYoKl_Rlxl062-nXi94kBVLRXxy3Ovje2VKpX-k7W4='],
            ['id' => 11, 'name' => 'Huisdieren', 'image' => 'https://d147a5vd7kzml6.cloudfront.net/img/appeltern_nl/251877/3005x2000/resize:normal/dieren_en_huisdieren_in_de_tuin.jpg'],
            ['id' => 12, 'name' => 'Gezondheid en Verzorging', 'image' => 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR68DEOqUyhc2nXghQayLmiGsPJY3w0eG4oKSQ2uI2xdhVmF2a53rQxzKXTmEyBpuG8-lgkXAyi0SmRD6TICY0ZPaGU1r_OCagEbP78wYEF7AE-t0VFObzRG2EGD0A1xWHepntLCmGOveE&usqp=CAc'],
        ];
    }    
}
