import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="container mx-auto p-2">
                <header>
                    <Header />
                </header>
                <main>
                    <hr className="my-2" />
                    <div className="flex items-center py-0 mt-1">
                        <input 
                            type="text" 
                            placeholder="Zoek een product" 
                            className="border rounded-full px-4 py-0 w-1/5 text-xs sm:text-sm md:text-base"
                        />
                        <button className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-2 p-4 border rounded-lg flex items-center cursor-pointer" onClick={() => window.location.href='/categorieen'}>
                        <img src="https://www.jumbo.com/dam/inspiratie/boodschappenpakket/Boodschappenpakket-Header-2000x354-Laatste-week.jpg" alt="Promotion" className="w-full rounded-lg" />
                    </div>
                                
                    <div className="mt-0 flex justify-between space-x-0">
                        <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/categorieen'}>
                            <div>
                                <h2 className="text-xl font-bold">Robijn 4 voor 2!</h2>
                                <p className="text-gray-600">Ongelofelijk 😉</p>
                            </div>
                            <img src="https://www.jumbo.com/INTERSHOP/static/WFS/Jumbo-Grocery-Site/-/Jumbo-Grocery/nl_NL/Images_Aanbiedingen/2025/Seizoensaanbiedingen/SA02/Seizoen_Week_04-08_16.png" alt="Promotion" className="w-1/4 rounded-lg" />
                        </div>
                        <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/categorieen'}>
                            <div>
                                <h2 className="text-xl font-bold">Page nu 1 + 1</h2>
                                <p className="text-gray-600">Ga je vaak naar het toilet? Dan is deze aanbieding voor jouw!</p>
                            </div>
                            <img src="https://www.jumbo.com/INTERSHOP/static/WFS/Jumbo-Grocery-Site/-/Jumbo-Grocery/nl_NL/Images_Aanbiedingen/2025/Weekaanbiedingen/Week%2008/Weekaanbiedingen-Week-08_02.png" alt="Promotion" className="w-1/4 rounded-lg" />
                        </div>
                        <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/categorieen'}>
                            <div>
                                <h2 className="text-xl font-bold">Nog een paar gram vet nodig?</h2>
                                <p className="text-gray-600">Eet hier veel van en je zal resultaat zien.</p>
                            </div>
                            <img src="https://www.jumbo.com/INTERSHOP/static/WFS/Jumbo-Grocery-Site/-/Jumbo-Grocery/nl_NL/Images_Aanbiedingen/2025/Weekaanbiedingen/Week%2008/Weekaanbiedingen-Week-08_06.png" alt="Promotion" className="w-1/4 rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-4 p-10 border rounded-lg flex items-center space-x-4 cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                        <div>
                            <h2 className="text-xl font-bold">Nieuws! Wij zijn uitgekozen tot allergoedkoopste online supermarkt</h2>
                            <p className="text-gray-600">Sinds 2021 zijn wij elk jaar door de Consumentenbond uitgeroepen tot de beste en goedkoopste online supermarkt. Klik hier voor meer informatie.</p>
                        </div>
                        <img src="https://res.cloudinary.com/cb-media/image/upload/f_auto,w_auto:300:384/cmsmedia/prod/binaries/content/gallery/cbhippowebsite/klantenservice/website/afbeeldingen-nieuwe-huisstijl/bestetest.png" alt="Promotion" className="h-16 rounded-lg" />
                    </div>
                    <div className="mt-4 p-8 border rounded-lg flex items-center justify-center space-x-8 cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                        <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/onderconstructie'}>
                            <img src="https://img.pikbest.com/png-images/20240828/round-logos-of-facebook-instagram-and-tiktok-colored-popular-social-media-logos_10570194.png!bw700" alt="Promotion" className="w-1/4 rounded-lg" />
                            <div>
                                <p className="text-gray-600">Volg ons op Sociale media</p>
                            </div>
                        </div>
                        <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/onderconstructie'}>
                            <img src="https://media.istockphoto.com/id/1168518509/vector/email-marketing.jpg?s=612x612&w=0&k=20&c=1b3Ek3YbdAdPmW-KjeznqphxTLB-4NT1vK6bwfRcnI4=" alt="Promotion" className="w-1/4 rounded-lg" />
                            <div>
                                <p className="text-gray-600">Nieuwsbrief aanmelding</p>
                            </div>
                        </div>
                        <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/onderconstructie'}>
                            <img src="https://www.shutterstock.com/image-vector/support-icon-can-be-used-600nw-1887496465.jpg" alt="Promotion" className="w-1/4 rounded-lg" />
                            <div>
                                <p className="text-gray-600">Klantenservice contactopties</p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="mt-2 p-1 border rounded-lg flex items-center justify-center space-x-6 cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                        <p className="text-gray-600">Algemene voorwaarden</p>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                        <p className="text-gray-600">Levering & verzending</p>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                        <p className="text-gray-600">Privacybeleid</p>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
                        <p className="text-gray-600">Onze organisatie</p>
                    </div>
                </footer>
            </div>
        </>
    );
}