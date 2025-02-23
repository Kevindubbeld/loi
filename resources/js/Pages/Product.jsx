import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function Product() {
    return (
        <>
            <Head title="Product" />
            <div className="container mx-auto p-2">
                <Header />
                <div className="relative mt-2 p-1 border rounded-lg cursor-pointer" onClick={() => window.location.href='/product'}>
                    <img src="https://vandevenvers.nl/wp-content/uploads/2024/06/Banner-Homepage-01.jpg" alt="Vleeswaren" className="w-full h-24 object-cover rounded-lg" />
                    <div className="absolute top-0 left-0 m-4">
                        <h2 className="text-xl font-bold text-white bg-black bg-opacity-50 px-4 py-6 rounded">Vleeswaren</h2>
                    </div>
                </div>
                <div className="mt-2 p-4 border rounded-lg flex items-center justify-center space-x-4 cursor-pointer">
                    <div className="invisible w-1/4"></div>
                    <img src="https://www.jumbo.com/dam-images/fit-in/720x720/Products/12122024_1734017700588_1734017707185_2378607000000_1.png" alt="Product" className="w-1/4 rounded-lg" style={{ marginRight: 'auto' }} />
                    <div className="flex-1 text-left">
                        <h2 className="text-xl font-bold">Scharrelkip Filet 2 Stuks</h2>
                        <h2 className="text-lg font-bold text-gray-600">Prijs €5,99</h2>
                        <p className="text-gray-600 text-sm">Kippenborstfilet* Vers, klasse A. *Scharrelkip binnengehouden. Kippenvlees.</p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" style={{ marginLeft: 'auto', marginRight: '10%' }}>Voeg toe</button>
                </div>
                <div className="mt-0 p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-full" onClick={() => window.location.href='/product'}>
                    <div>
                        <h2 className="text-lg font-bold">Productomschrijving</h2>
                    </div>
                </div>
                <div className="mt-0 p-16 border rounded-lg flex items-center space-x-4 cursor-pointer w-full" onClick={() => window.location.href='/product'}>
                    <div>
                        <h2 className="text-lg font-bold">Volledige productomschrijving. Kan HTML bevatten</h2>
                    </div>
                </div>
                <div className="mt-0 p-8 border rounded-lg flex items-center justify-center space-x-8 cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
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
