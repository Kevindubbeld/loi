# LOI Project

Dit project is een webapplicatie gebouwd met het Laravel framework. Het is een eerste opzet van de supermakrt Commodum Copia-casus website.

## Over Laravel

Laravel is een webapplicatie framework met een expressieve, elegante syntax.
Laravel neemt de pijn weg van ontwikkeling door veelvoorkomende taken te vereenvoudigen die in veel webprojecten worden gebruikt, zoals:

- Eenvoudige, snelle routing engine
- Krachtige dependency injection container
- Meerdere back-ends voor sessie- en cacheopslag

Laravel is toegankelijk, krachtig en biedt de tools die nodig zijn voor grote, robuuste applicaties waarond dus deze webwinkel.

## Installatie

Volg de onderstaande stappen om het project lokaal op te zetten:

1. **Clone de repository:**

    ```sh
    git clone https://github.com/Kevindubbeld/loi.git
    cd loi-project
    ```

2. **Installeer de afhankelijkheden:**

    ```sh
    composer install
    npm install
    ```

3. **Kopieer het `.env` bestand en configureer de omgeving:**

    ```sh
    cp .env.example .env
    ```

    Pas de database-instellingen aan in het `.env` bestand:

    ```env
    DB_CONNECTION=sqlite
    DB_DATABASE=:memory:
    ```

4. **Voer de migraties en seeders uit:**

    ```sh
    php artisan migrate --seed
    ```

5. **Start de ontwikkelingsserver:**

    ```sh
    php artisan serve
    npm run dev
    ```

    De applicatie is nu toegankelijk op `http://127.0.0.1:8000`.

## Routes

De belangrijkste routes van de applicatie zijn:

- `/` - Homepagina
- `/categorieen` - Overzicht van categorieën
- `/subcategorieen/{id}` - Overzicht van subcategorieën binnen een categorie
- `/product/{id}` - Details van een specifiek product

## Extra info

Bedankt voor je interesse om in mijn gemaakte project te duiken. Zoals je misschien al gelijk opvalt is dat er gekozen is om geen vervelende SQL dumps mee te leveren. Maar de benodigde data in memory automatisch in te laden. Heb je vragen dan weet je me te vinden. Sportieve groet, Kevin