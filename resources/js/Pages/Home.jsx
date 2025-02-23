import { Footer } from '@/Components/Footer';
import Header from '@/Components/Header';
import { SocialMedia } from '@/Components/SocialMedia';
import { Head } from '@inertiajs/react';


export default function Home() {
    const aanbiedingen = [
        {
            naam: 'Robijn 4 voor 2!',
            beschrijving: 'Ongelofelijk 😉',
            afbeelding: 'https://www.jumbo.com/INTERSHOP/static/WFS/Jumbo-Grocery-Site/-/Jumbo-Grocery/nl_NL/Images_Aanbiedingen/2025/Seizoensaanbiedingen/SA02/Seizoen_Week_04-08_16.png'
        },
        {
            naam: 'Page nu 1 + 1',
            beschrijving: 'Ga je vaak naar het toilet? Dan is deze aanbieding voor jouw!',
            afbeelding: 'https://www.jumbo.com/INTERSHOP/static/WFS/Jumbo-Grocery-Site/-/Jumbo-Grocery/nl_NL/Images_Aanbiedingen/2025/Weekaanbiedingen/Week%2008/Weekaanbiedingen-Week-08_02.png'
        },
        {
            naam: 'Nog een paar gram vet nodig?',
            beschrijving: 'Eet hier veel van en je zal resultaat zien.',
            afbeelding: 'https://www.jumbo.com/INTERSHOP/static/WFS/Jumbo-Grocery-Site/-/Jumbo-Grocery/nl_NL/Images_Aanbiedingen/2025/Weekaanbiedingen/Week%2008/Weekaanbiedingen-Week-08_06.png'
        }
    ];

    return (
        <>
            <Head title="Home" />
            <div className="container mx-auto p-2">
                <header>
                    <Header />
                </header>
                <main>
                    <div className="mt-2 p-4 border rounded-lg flex items-center cursor-pointer" onClick={() => window.location.href='/categorieen'}>
                        <img src="https://www.jumbo.com/dam/inspiratie/boodschappenpakket/Boodschappenpakket-Header-2000x354-Laatste-week.jpg" alt="Promotion" className="w-full rounded-lg" />
                    </div>
                                
                    <div className="mt-0 flex justify-between space-x-0">
                        {aanbiedingen.map((aanbieding, index) => (
                            <div key={index} className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/categorieen'}>
                                <div>
                                    <h2 className="text-xl font-bold">{aanbieding.naam}</h2>
                                    <p className="text-gray-600">{aanbieding.beschrijving}</p>
                                </div>
                                <img src={aanbieding.afbeelding} alt="Promotion" className="w-1/4 rounded-lg" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 p-10 border rounded-lg flex items-center space-x-4 cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                        <div>
                            <h2 className="text-xl font-bold">Nieuws! Wij zijn uitgekozen tot allergoedkoopste online supermarkt</h2>
                            <p className="text-gray-600">Sinds 2021 zijn wij elk jaar door de Consumentenbond uitgeroepen tot de beste en goedkoopste online supermarkt. Klik hier voor meer informatie.</p>
                        </div>
                        <img src="https://res.cloudinary.com/cb-media/image/upload/f_auto,w_auto:300:384/cmsmedia/prod/binaries/content/gallery/cbhippowebsite/klantenservice/website/afbeeldingen-nieuwe-huisstijl/bestetest.png" alt="Promotion" className="h-16 rounded-lg" />
                    </div>
                    <SocialMedia />
                </main>
                <Footer />
            </div>
        </>
    );
}