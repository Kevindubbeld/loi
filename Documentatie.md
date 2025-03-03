# Overzicht van de geschreven Code

Hier is een samenvatting van de geschreven code voor het LOI project om een webshop-frontend te maken:
### 1. **Homepagina (Home.jsx):**
- **Doel:** Dit is de hoofdpagina van de webshop die klanten verwelkomt en verschillende promoties toont.
- **Functionaliteit:**
    - Bevat een promotie-banner met een afbeelding die naar de categorieënpagina leidt.
    - Toont een lijst met aanbiedingen, inclusief naam, beschrijving en afbeelding. Elke aanbieding leidt naar de categorieënpagina.
    - Een nieuwssectie benadrukt een belangrijke boodschap en biedt een knop naar een externe pagina.
    - De component bevat een header, footer en social media-secties voor navigatie en branding.

### 2. **Categorieënpagina (Categorieen.jsx):**
- **Doel:** Overzicht van alle categorieën in de webshop.
- **Functionaliteit:**
    - Toont een rasterweergave van alle beschikbare categorieën, elk met een afbeelding en naam.
    - Elke categorie is klikbaar en leidt naar de subcategorieënpagina voor de geselecteerde categorie.
    - De component integreert een header, footer en social media-secties.

### 3. **Subcategorieënpagina (SubCategorieen.jsx):**
- **Doel:** Overzicht van subcategorieën en producten binnen een geselecteerde categorie.
- **Functionaliteit:**
    - Haalt de details van een specifieke categorie op via een API-oproep.
    - Toont een banner met de naam en afbeelding van de geselecteerde categorie.
    - Toont een lijst van subcategorieën, inclusief naam en afbeelding.
    - Binnen elke subcategorie worden producten weergegeven met details zoals naam, prijs, korte omschrijving en afbeelding.
    - Producten zijn klikbaar en leiden naar de productpagina.
    - Bevat ook een header, footer en social media-secties.

### 4. **Productpagina (Product.jsx):**
- **Doel:** Weergave van de details van een specifiek product.
- **Functionaliteit:**
    - Haalt productgegevens en de bijbehorende categorie op via API-oproepen.
    - Toont productdetails, zoals naam, prijs, korte en lange beschrijving, en afbeelding.
    - Toont de bijbehorende categorie als een banner waarmee de gebruiker terug kan navigeren naar de subcategorieënpagina.
    - Biedt een knop om het product toe te voegen (mogelijke winkelwagenfunctionaliteit).
    - Bevat een header, footer en social media-secties.

### Algemene Componenten:
- **Header:** Bovenaan weergegeven navigatie-element dat in alle pagina's is opgenomen.
- **Footer:** Onderaan weergegeven component met algemene details of links.
- **SocialMedia:** Sectie voor social media-navigatie, opgenomen in elke pagina voor strategische branding.

### Opm.:
De functionaliteit van elke pagina hangt samen, waarbij de gebruiker van categorieën naar subcategorieën en vervolgens naar productdetails navigeert, met een duidelijke focus op gebruiksvriendelijkheid en visuele aantrekkingskracht.



Hier is een korte samenvatting van de functionaliteit van het backend op basis van de bijgevoegde informatie:
### **Categorieën Backend:**
1. **CategoryController**
    - **Lijst van categorieën ophalen:**
      Via de `index()`-methode wordt een lijst van alle categorieën vanuit de database opgehaald.
    - **Details van één categorie ophalen:**
      De `show()`-methode retourneert de details van een specifieke categorie (op basis van een ID).
      Het resultaat bevat ook gekoppelde subcategorieën en hun producten, dankzij een relatie tussen subcategorieën en producten.

### **Producten Backend:**
1. **ProductController**
    - **Lijst van producten ophalen:**
      De `index()`-methode retourneert een lijst van alle producten in de database.
    - **Details van één product ophalen:**
      De `show()`-methode retourneert de details van een specifiek product op basis van een opgegeven ID. Als het product niet wordt gevonden, wordt `null` teruggegeven.

### **Requestvalidaties:**
1. **ListCategorieenRequest**
    - Hoewel er momenteel geen actieve validatieregels zijn, is deze request class voorbereid om validatie toe te passen op verzoeken voor lijstfunctionaliteiten, zoals de aanwezigheid en de geldigheid van een `category_id`.

### **Algemene Functionaliteit:**
- **Categorie entiteit:** Voor het beheren en ophalen van categorieën en hun gerelateerde data (zoals subcategorieën en producten).
- **Product entiteit:** Voor het beheren en ophalen van productgegevens.
- **Database interacties:** Het gebruik van database queries en Eloquent-relaties voor het ophalen van data.
- **Validatie:** Een voorbereid validatiesysteem om verzoeken te beveiligen of te controleren, hoewel sommige functies nog niet actief zijn.

Het backend is ontworpen om een API-achtige structuur te bieden voor de webshop, waarbij het data zoals categorieën, subcategorieën en producten structureel ophaalt en filtert voor gebruik aan de frontend.




Hier is een korte beschrijving van de domeinobjecten:
### **1. Category**
- **Beschrijving:** Vertegenwoordigt een hoofdcategorie waartoe subcategorieën behoren.
- **Velden:**
    - `name`: Naam van de categorie.
    - `img_url`: URL naar een afbeelding die de categorie visueel weergeeft.

- **Relaties:**
    - Heeft een _one-to-many_ relatie met **SubCategory** (een categorie bevat meerdere subcategorieën).

### **2. SubCategory**
- **Beschrijving:** Vertegenwoordigt een subcategorie die gekoppeld is aan een hoofdcategorie en producten bevat.
- **Velden:**
    - `category_id`: Verwijzing naar de bijbehorende hoofdcategorie.
    - `name`: Naam van de subcategorie.
    - `img_url`: URL naar een afbeelding die de subcategorie visueel weergeeft.

- **Relaties:**
    - **Belongs to** een **Category** (een subcategorie is gekoppeld aan één categorie).
    - Heeft een _one-to-many_ relatie met **Product** (een subcategorie bevat meerdere producten).

### **3. Product**
- **Beschrijving:** Vertegenwoordigt een individueel product dat wordt verkocht in de webshop.
- **Velden:**
    - `sub_category_id`: Verwijzing naar de bijbehorende subcategorie.
    - `name`: Naam van het product.
    - `short_description`: Korte beschrijving van het product.
    - `long_description`: Gedetailleerde beschrijving van het product.
    - `price`: Prijs van het product.
    - `quantity`: Beschikbare hoeveelheid op voorraad.
    - `img_url`: URL naar een afbeelding die het product visueel weergeeft.

- **Relaties:**
    - **Belongs to** een **SubCategory** (een product is gekoppeld aan één subcategorie).

### **Samenvatting van Relaties tussen Domeinobjecten:**
- Een **Category** bevat meerdere **SubCategory** objecten.
- Een **SubCategory** bevat meerdere **Product** objecten.
- Een **Product** behoort tot één specifieke **SubCategory**.
- Een **SubCategory** behoort tot één specifieke **Category**.

Deze hiërarchie structureert het domein en biedt een overzichtelijke manier om categorieën, subcategorieën en producten in een webshop te beheren.



### **Samenvatting van de Database Structuur**
De database bevat drie hoofdtabeltypen in een hiërarchische structuur, ontworpen voor een webshopomgeving:
#### **1. Tabel: `categories`**
- **Beschrijving:** Houdt hoofdcategorieën bij, zoals _Groenten en Fruit_ of _Dranken_.
- **Belangrijkste velden:**
    - `id`: Primaire sleutel.
    - `name`: Naam van de categorie.
    - `img_url`: URL naar een afbeelding voor de categorie.

- **Relatie:**
    - Heeft een _one-to-many_ relatie met `sub_categories`.

#### **2. Tabel: `sub_categories`**
- **Beschrijving:** Houdt subcategorieën bij die gekoppeld zijn aan een hoofdcategorie, zoals "Kaas" (behorende bij de categorie "Zuivel en Eieren").
- **Belangrijkste velden:**
    - `id`: Primaire sleutel.
    - `category_id`: Foreign key naar `categories`.
    - `name`: Naam van de subcategorie.
    - `img_url`: URL naar een afbeelding voor de subcategorie.

- **Relatie:**
    - Heeft een _many-to-one_ relatie met `categories`.
    - Heeft een _one-to-many_ relatie met `products`.

#### **3. Tabel: `products`**
- **Beschrijving:** Houdt producten bij zoals "Kipfilet" of "Appels".
- **Belangrijkste velden:**
    - `id`: Primaire sleutel.
    - `sub_category_id`: Foreign key naar `sub_categories`.
    - `category_id`: Foreign key naar `categories` (toegevoegd voor efficiëntere queries).
    - `name`: Naam van het product.
    - `short_description`: Korte productomschrijving.
    - `long_description`: Uitgebreide productomschrijving.
    - `price`: Prijs van het product.
    - `quantity`: Beschikbare hoeveelheid op voorraad.
    - `img_url`: URL naar een afbeelding van het product.

- **Relatie:**
    - Heeft een _many-to-one_ relatie met zowel `sub_categories` als `categories` (via buitenlandse sleutels).

### **Overzicht van Relaties**
- **Hoofdrelaties:**
    - Een hoofdcategorie (**category**) kan meerdere subcategorieën (**sub_categories**) bevatten.
    - Een subcategorie (**sub_category**) kan meerdere producten (**products**) bevatten.
    - Een product behoort tot één subcategorie en, via een directe koppeling, ook tot één hoofdcategorie.

### **Feeders: Seeder Overzicht**
#### **1. `CategorySeeder`**
- **Beschrijving:** Voegt een reeks basiscategorieën in zoals:
    - _Groenten en Fruit, Zuivel en Eieren, Dranken_ enz.

- **Voorbeeld:** Een categorie zoals "Groenten en Fruit" wordt toegevoegd met bijbehorende afbeelding.

#### **2. `SubCategorySeeder`**
- **Beschrijving:** Voegt subcategorieën in die gekoppeld zijn aan de hoofdcategorieën.
    - _Voorbeeld:_ "Kaas" is een subcategorie van "Zuivel en Eieren", en "Pizza" hoort bij "Diepvries".

- **Procedure:** Verwijst naar een bestaande categorie in de `categories`-tabel om `category_id` in te vullen.

#### **3. `ProductSeeder`**
- **Beschrijving:** Voegt specifieke producten in, gekoppeld aan subcategorieën en hun hoofdcategorieën.
    - _Voorbeeld:_ Het product _Kipfilet_ wordt gekoppeld aan "Kippenvlees" (subcategorie) en daarmee indirect aan "Vlees en Vis" (hoofdcategorie).

- **Procedure:**
    - Zoekt een bestaande `sub_category` op via de naam.
    - Verwijst naar `sub_category_id` en vult automatisch `category_id` in.

### **Conclusie**
De database is hiërarchisch georganiseerd om een webshop efficiënt te ondersteunen:
1. **Categorieën** bieden productstructuur op hoog niveau.
2. **Subcategorieën** verfijnen deze structuur.
3. **Producten** leveren de daadwerkelijke inhoud voor de webshop.

De seeders zorgen voor een basisvulling van categorieën, subcategorieën en producten, waarmee een goed gestructureerde basisdatabase ontstaat voor verdere ontwikkeling of presentatie.



Hier is een overzicht van de gebruikte libraries, onderverdeeld in categorieën op basis van hun functionaliteit:
### **Frontend Frameworks en Bibliotheken**
1. **React** (`react`, `react-dom`) - Versie 18.2.0
    - **Beschrijving**: Een populaire JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces en componentgebaseerde applicaties.
    - **Gebruik**: Voor het maken van dynamische en herbruikbare UI-componenten en het renderen van de applicatie op de DOM.

2. **React Router Dom** (`react-router-dom`) - Versie 7.2.0
    - **Beschrijving**: Een declaratieve routeringbibliotheek voor React.
    - **Gebruik**: Voor het beheren van client-side routes in SPA's (Single Page Applications).

### **React Specifieke Integraties**
1. **@inertiajs/react** - Versie 2.0.0
    - **Beschrijving**: React-binding voor Inertia.js.
    - **Gebruik**: Voor server-side rendering en het maken van full-stack SPA's die React combineren met backend frameworks (zoals Laravel).

2. **@inertiajs/progress** - Versie 0.1.2
    - **Beschrijving**: Maakt een voortgangsbalk (progress bar) mogelijk voor Inertia.js navigaties.
    - **Gebruik**: Geeft visuele feedback tijdens het laden van nieuwe pagina's.

3. **@headlessui/react** - Versie 2.0.0
    - **Beschrijving**: Onopgemaakte toegankelijkheidscomponenten gebouwd voor React.
    - **Gebruik**: Voor het bouwen van toegankelijke UI-componenten zoals dialoogvensters en dropdowns zonder CSS-styling.

### **Style en CSS Tools**
1. **Tailwind CSS** (`tailwindcss`) - Versie 3.2.1
    - **Beschrijving**: Een utility-first CSS-framework voor snel stylen.
    - **Gebruik**: Voor responsieve en gestileerde ontwerpen via voorgedefinieerde klassen.

2. **@tailwindcss/forms** - Versie 0.5.3
    - **Beschrijving**: Een plugin voor Tailwind CSS die formulierstyling verbetert.
    - **Gebruik**: Om gestandaardiseerde stijlen aan formuliervelden toe te voegen.

3. **PostCSS** (`postcss`) - Versie 8.4.31
    - **Beschrijving**: Een tool voor het transformeren van CSS met plugins.
    - **Gebruik**: Voor het verwerken van CSS en het automatiseren van optimalisaties (wordt doorgaans samen met Tailwind CSS gebruikt).

4. **Autoprefixer** - Versie 10.4.12
    - **Beschrijving**: Een PostCSS-plugin voor het automatisch toevoegen van vendor-prefixes aan CSS.
    - **Gebruik**: Om CSS compatibel te maken met verschillende browsers.

### **Bundling en Build Tools**
1. **Vite** (`vite`) - Versie 6.1.1
    - **Beschrijving**: Een snelle build-tool en frontend-bundler.
    - **Gebruik**: Voor het ontwikkelen en bundelen van de applicatie. Vite biedt snelle paginiloads en hot module replacement (HMR).

2. **@vitejs/plugin-react** - Versie 1.3.2
    - **Beschrijving**: React-specifieke plugin voor Vite.
    - **Gebruik**: Voor ondersteuning van React-functionaliteiten binnen Vite (zoals JSX of vernieuwen zonder herladen).

3. **Laravel Vite Plugin** (`laravel-vite-plugin`) - Versie 1.2.0
    - **Beschrijving**: Integreert Vite met Laravel.
    - **Gebruik**: Voor gebruiksvriendelijke asset-bundling in Laravel-applicaties die moderne bundlers nodig hebben.

4. **Concurrently** - Versie 9.0.1
    - **Beschrijving**: Een tool die je meerdere commando's tegelijk laat uitvoeren.
    - **Gebruik**: Waarschijnlijk ingezet voor het gelijktijdig draaien van zowel frontend- als backend-servers tijdens de ontwikkeling.

### **HTTP Request Bibliotheken**
1. **Axios** - Versie 1.7.4
    - **Beschrijving**: Een populaire HTTP-client voor het maken van API-aanroepen.
    - **Gebruik**: Voor het versturen van asynchrone HTTP-verzoeken vanuit de applicatie naar de server.

### **Samenvatting**
- **Frontend en UI**: React, React Router Dom, @headlessui/react, @inertiajs/react.
- **Styling**: Tailwind CSS, @tailwindcss/forms, PostCSS, Autoprefixer.
- **Bundling**: Vite, @vitejs/plugin-react, Laravel Vite Plugin.
- **API-aanroepen**: Axios.
- **Overig**: Concurrently voor het beheren van meerdere processen tijdens ontwikkeling.

Deze bibliotheken werken samen om een moderne, snelle, en schaalbare full-stack webapplicatie te bouwen, met focus op zowel ontwikkelaarservaring als eindgebruikerservaring.