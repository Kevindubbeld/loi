import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="container mx-auto p-4">
                <Header />
                <div className="flex items-center py-4 border-b">
                    <input 
                        type="text" 
                        placeholder="Zoek een product" 
                        className="border rounded-l px-4 py-2 w-1/3"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="mt-4 p-4 border rounded-lg flex items-center space-x-4 cursor-pointer" onClick={() => window.location.href='/aanbiedingen'}>
                    <img src="https://www.jumbo.com/dam/inspiratie/boodschappenpakket/Boodschappenpakket-Header-2000x354-Laatste-week.jpg" alt="Promotion" className="w-1/4 rounded-lg" />
                    <div>
                        <h2 className="text-xl font-bold">MAAK KANS OP 50,- EURO GRATIS BOODSCHAPPEN</h2>
                        <p className="text-gray-600">Bij besteding van 20,- euro of meer maakt u automatisch kans.</p>
                    </div>
                </div>
                            
                <div className="mt-4 flex justify-between space-x-4">
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/producten'}>
                        <img src="https://www.jumbo.com/dam/inspiratie/nieuw/PH-Nieuw.jpg" alt="Promotion" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Nieuwe producten!</h2>
                            <p className="text-gray-600">Ontdek alle 200 nieuwe producten hier</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/aanbiedingen'}>
                        <img src="	https://www.jumbo.com/dam/homepage/2025/8/Gouden-Loekie-HP-visual.jpg" alt="Promotion" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Stem nu mee</h2>
                            <p className="text-gray-600">Help Mormel aan een Gouden Loeki</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/aanbiedingen'}>
                        <img src="https://static.ah.nl/static/recepten/img_RAM_PRD198059_1224x900_JPG.jpg" alt="Promotion" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Wat eten we vandaag?</h2>
                            <p className="text-gray-600">Handige kook recepten</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-4 border rounded-lg flex items-center space-x-4 cursor-pointer" onClick={() => window.location.href='/aanbiedingen'}>
                    <img src="https://t3.ftcdn.net/jpg/11/42/27/12/360_F_1142271258_Oc1hZrtXs2dCKpVrYBm0e3Cnaj9NrpEc.jpg" alt="Promotion" className="w-1/4 rounded-lg" />
                    <div>
                        <h2 className="text-xl font-bold">Onverslagen zijn wij de Allergoedkoopste supermarkt online</h2>
                        <p className="text-gray-600">Leuk voor je portomonee</p>
                    </div>
                </div>
                <div className="mt-4 p-4 border rounded-lg flex items-center justify-center space-x-4 cursor-pointer" onClick={() => window.location.href='/aanbiedingen'}>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/aanbiedingen'}>
                        <div>
                            <p className="text-gray-600">This is the promotion text.</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/aanbiedingen'}>
                        <div>
                            <p className="text-gray-600">This is the promotion text.</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/5" onClick={() => window.location.href='/aanbiedingen'}>
                        <div>
                            <p className="text-gray-600">This is the promotion text.</p>
                        </div>
                    </div>
                </div>
                <footer className="mt-4 p-4 border rounded-lg flex items-center justify-center space-x-4 cursor-pointer" onClick={() => window.location.href='/aanbiedingen'}>
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href='/aanbiedingen'}>
                            <p className="text-gray-600">This is the promotion text.</p>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href='/aanbiedingen'}>
                            <p className="text-gray-600">This is the promotion text.</p>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href='/aanbiedingen'}>
                            <p className="text-gray-600">This is the promotion text.</p>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href='/aanbiedingen'}>
                            <p className="text-gray-600">This is the promotion text.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}