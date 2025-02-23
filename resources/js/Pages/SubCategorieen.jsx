import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function SubCategorieen() {
    const subcategories = [
        { id: 1, name: 'Kippenvlees', image: 'https://png.pngtree.com/png-clipart/20230812/original/pngtree-fried-chicken-icon-logo-illustration-delicious-wings-lunch-vector-picture-image_10499362.png', products: [
            { id: 1, name: 'Kipfilet', price: '€5,99', description: 'Verse kipfilet per 500g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/12122024_1734017700588_1734017707185_2378607000000_1.png' },
            { id: 2, name: 'Kipdrumsticks', price: '€4,99', description: 'Verse kipdrumsticks per 500g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820972327_1730821013982_2378613000000_1.png' },
            { id: 3, name: 'Kipdijfilet', price: '€6,99', description: 'Verse kipdijfilet per 500g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/17102024_1729157646478_1729157662073_2335881000000_1.png' },
            { id: 4, name: 'Kipgehakt', price: '€5,49', description: 'Vers kipgehakt per 500g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820973073_1730820990171_8718452850457_1.png' },
            { id: 5, name: 'Kipfilet gesneden', price: '€5,99', description: 'Verse kipfilet met vel per 500g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/30012025_1738251168101_1738251174625_2369922000000_1.png' },
            { id: 6, name: 'Kipfilethaasjes', price: '€5,99', description: 'Kipfilethaasjes Voorgegaard 6 Stuks', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/21022025_1740151973618_1740151980651_8718452886951_1.png' },
            { id: 7, name: 'Cordon Bleu', price: '€6,49', description: 'Scharrelkip Cordon Bleu 2 Stuks', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820972141_1730820990986_8718452684144_1.png' },
            { id: 8, name: 'Kip Shoarma', price: '€5,99', description: 'Verse Kip Shoarma Dijfilet 500g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820973386_1730821013790_8718452850464_1.png' }
        ]},
        { id: 2, name: 'Rundervlees', image: 'https://img.freepik.com/premium-vector/rundvlees-logo-ontwerp-inspiratie-met-badges-en-vintage-stijl_139869-36.jpg?w=1480', products: [
            { id: 1, name: 'Runderreepjes', price: '€5,65', description: 'Vers Runderreepjes ca. 300 g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/09082023_1691585002612_1691585020359_2333762000000_1.png' },
            { id: 2, name: 'Kogelbiefstuk', price: '€8.23', description: 'Verse Kogelbiefstuk 2 Stuks ca. 270 g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/27092023_1695807348009_1695807361738_2369053000000_1.png' },
            { id: 3, name: 'Riblap', price: '€13,42', description: 'Vers Riblap ca. 1000 g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/09082023_1691589330733_1691589342185_2378522000000_1.png' },
            { id: 4, name: 'Rundergehakt', price: '€4.89', description: 'Verse Rundergehakt 500g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/21112024_1732217600134_1732217606321_8718452597024_1.png' },
            { id: 5, name: 'Rundervinken', price: '€6,00', description: 'Verse Rundervinken 5 Stuks', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/05112024_1730820971593_1730820994399_8718452678549_1.png' },
            { id: 6, name: 'Biefstuk', price: '€3,99', description: 'Verse Duitse Biefstuk 2 Stuks', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/14022024_1707873741186_1707873748959_2348881000000_1.png' },
            { id: 7, name: 'Entrecote', price: '€7,54', description: 'Fijnproevers Entrecote Gerijpt ca. 210 g', image: 'https://www.jumbo.com/dam-images/fit-in/360x360/Products/12122024_1734014884918_1734014891120_2336075000000_1.png' },
        ]},
    ];

    return (
        <>
            <Head title="SubCategorieën" />
            <div className="container mx-auto p-2">
                <Header />
                <div className="relative mt-1 p-1 border rounded-lg cursor-pointer" onClick={() => window.location.href='/product'}>
                    <img src="https://vandevenvers.nl/wp-content/uploads/2024/06/Banner-Homepage-01.jpg" alt="Vleeswaren" className="w-full h-24 object-cover rounded-lg" />
                    <div className="absolute top-0 left-0 m-4">
                        <h2 className="text-xl font-bold text-white bg-black bg-opacity-50 px-4 py-6 rounded">Vleeswaren</h2>
                    </div>
                </div>

                <div className="mt-0 flex flex-col space-y-0">
                    {subcategories.map(subcategory => (
                        <div key={subcategory.id} className="flex flex-row">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                <div className="p-2 border rounded-lg flex flex-col items-center space-y-2 cursor-pointer">
                                    <img src={subcategory.image} alt={subcategory.name} className="h-16 object-cover rounded-lg" />
                                    <div>
                                        <h2 className="text-lg font-bold">{subcategory.name}</h2>
                                    </div>
                                </div>
                                {subcategory.products.map((product) => (
                                    <div key={product.id} className="p-2 border rounded-lg flex flex-col space-y-2">
                                        <div className='flex flex-row space-x-2 justify-center'>
                                            <img src={product.image} alt={product.name} className="h-16 object-cover rounded-lg" />
                                            <div className="text-gray-600 content-center">{product.price}</div>
                                        </div>
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <p className="text-gray-600 text-xs">{product.description}</p>
                                    </div>
                                ))}
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