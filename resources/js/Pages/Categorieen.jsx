import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function Categorieen() {
    const categories = [
        { id: 1, name: 'Groenten en Fruit', image: 'https://www.schumacher-packaging.com/thumbor/lsORGmtdwZuCXSNbHsy8_lIqZE8=/1920x/www.schumacher-packaging.com/fileadmin/user_upload/home/01_produkte-loesungen/branchenloesungen-packaging/lebensmittel/obst-gemuese/header/header-obst-gemuese-1920x768px.jpg%3F1613151707' },
        { id: 2, name: 'Zuivel en Eieren', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcRsc9qbK7I0xoN6fruycOoa1jwi6cew2QQ&s' },
        { id: 3, name: 'Vlees en Vis', image: 'https://www.lovap.be/storage/images/web/86586cff4174f196288486d83fac8f31-1621945259.jpg' },
        { id: 4, name: 'Brood en Banket', image: 'https://www.handtmann.nl/wp-content/uploads/Brood-banket.jpg' },
        { id: 5, name: 'Dranken', image: 'https://www.wijnvoordeel.nl/media/catalog/product/g/e/georges_clement_champagne_brut_probeerpakket_1.png?quality=95&fit=bounds&height=400&width=500&bg-color=FFF' },
        { id: 6, name: 'Snacks en Snoep', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAU6FSS5UeiP3PpUnzjyTNbPMNdJNiRwMyg&s' },
        { id: 7, name: 'Diepvries', image: 'https://www.ilgiornale.nl/wp-content/uploads/pizza-supermarkt-test-revieuw-beoordleing-smaak-beste-lekkerste-oetker-AH-jumbo-JPG.jpg' },
        { id: 8, name: 'Kruiden', image: 'https://media.s-bol.com/2g4ZqOQ71AKN/550x397.jpg' },
        { id: 9, name: 'Non-Food', image: 'https://www.mawsforfinefood.co.uk/media/catalog/category/non_food_LOGO.jpg' },
        { id: 10, name: 'Babyvoedsel', image: 'https://media.istockphoto.com/id/530731523/nl/foto/feeding.jpg?s=612x612&w=0&k=20&c=ewYoKl_Rlxl062-nXi94kBVLRXxy3Ovje2VKpX-k7W4=' },
        { id: 11, name: 'Huisdieren', image: 'https://d147a5vd7kzml6.cloudfront.net/img/appeltern_nl/251877/3005x2000/resize:normal/dieren_en_huisdieren_in_de_tuin.jpg' },
        { id: 12, name: 'Gezondheid en Verzorging', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR68DEOqUyhc2nXghQayLmiGsPJY3w0eG4oKSQ2uI2xdhVmF2a53rQxzKXTmEyBpuG8-lgkXAyi0SmRD6TICY0ZPaGU1r_OCagEbP78wYEF7AE-t0VFObzRG2EGD0A1xWHepntLCmGOveE&usqp=CAc' },
    ];

    return (
        <>
            <Head title="Categorieën" />
            <div className="container mx-auto p-2">
                <Header />
                <hr className="my-2" />
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {categories.map(category => (
                        <div key={category.id} className="p-1 border rounded-lg flex flex-col items-center justify-center space-y-2 cursor-pointer text-center" onClick={() => window.location.href='/subcategorieen'}>
                            <img src={category.image} alt={category.name} className="w-1/2 rounded-lg" />
                            <div>
                                <h2 className="text-xl font-bold">{category.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20 p-8 border rounded-lg flex items-center justify-center space-x-8 cursor-pointer" onClick={() => window.location.href='/onderconstructie'}>
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