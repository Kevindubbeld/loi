# Overzicht van Aangepaste Code

Dit document beschrijft alle aangepaste code die is aangemaakt voor het LOI project.

## Controllers

### ProductController

De `ProductController` bevat methoden om een lijst van producten op te halen en de details van een specifiek product weer te geven.

```php
// filepath: /Users/kevindubbeld/Projects/laravel-projects/LOI/app/Http/Controllers/ProductController.php
<?php

namespace App\Http\Controllers;

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
```

### CategoryController

De `CategoryController` bevat methoden om een lijst van categorieën op te halen en de details van een specifieke categorie weer te geven, inclusief de subcategorieën en producten.

```php
// filepath: /Users/kevindubbeld/Projects/laravel-projects/LOI/app/Http/Controllers/CategoryController.php
<?php

namespace App\Http\Controllers;

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
```

## Routes

### Web Routes

De web routes definiëren de routes voor de verschillende pagina's van de applicatie.

```php
// filepath: /Users/kevindubbeld/Projects/laravel-projects/LOI/routes/web.php
<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

Route::get('/categorieen', function () {
    return Inertia::render('Categorieen');
});

Route::get('/subcategorieen/{id}', function ($id) {
    return Inertia::render('SubCategorieen', ['id' => $id]);
});

Route::get('/product/{id}', function ($id) {
    return Inertia::render('Product', ['id' => $id]);
});

Route::get('/onderconstructie', function () {
    return Inertia::render('Onderconstructie');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/api.php';
```

### API Routes

De API routes definiëren de routes voor het ophalen van categorieën en producten via de API.

```php
// filepath: /Users/kevindubbeld/Projects/laravel-projects/LOI/routes/api.php
<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/api/category', [CategoryController::class, 'index']);
Route::get('/api/category/{id}', [CategoryController::class, 'show']);
Route::get('/api/product', [ProductController::class, 'index']);
Route::get('/api/product/{id}', [ProductController::class, 'show']);
```

## Seeders

### CategorySeeder

De `CategorySeeder` vult de `categories` tabel met voorbeeldgegevens.

```php
// filepath: /Users/kevindubbeld/Projects/laravel-projects/LOI/database/seeders/CategorySeeder.php
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
            ['name' => 'Zuivel en Eieren', 'img_url' => 'https://img.freepik.com/vrije-photo/glazen-kan-met-melk-ei-en-deegroller-op-houten-tafel_114579-18238.jpg?t=st=1740515968~exp=1740519568~hmac=ffaad8b586499e92cc485f4d8b9242f6bf14bfe2458c34c7389dcc2d2848578e&w=1380'],
            ['name' => 'Vlees en Vis', 'img_url' => 'https://www.cooklikeachef.nl/img/sliders/255_9ff741ef83d5051e5ff34313e830d446.jpg'],
            ['name' => 'Brood en Banket', 'img_url' => 'https://www.handtmann.nl/wp-content/uploads/Brood-banket.jpg'],
            ['name' => 'Dranken', 'img_url' => 'https://ls.codetech.nl/shops/305710/files/469753746/image.jpg'],
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
```

### SubCategorySeeder

De `SubCategorySeeder` vult de `sub_categories` tabel met voorbeeldgegevens.

```php
// filepath: /Users/kevindubbeld/Projects/laravel-projects/LOI/database/seeders/SubCategorySeeder.php
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
                'img_url' => 'https://img.freepik.com/premium-vector/banana-logo-icon-design_586739-3058.jpg?w=740',
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
                'img_url' => 'https://i.pinimg.com/736x/e9/23/ae/e923ae91181