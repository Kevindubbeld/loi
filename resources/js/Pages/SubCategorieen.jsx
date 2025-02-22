import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function SubCategorieen() {
    const subcategories = [
        { id: 1, name: 'Kippenvlees', image: 'https://png.pngtree.com/png-clipart/20230812/original/pngtree-fried-chicken-icon-logo-illustration-delicious-wings-lunch-vector-picture-image_10499362.png', products: [
            { name: 'Kipfilet', price: '€5,99', description: 'Verse kipfilet per 500g', image: 'https://www.example.com/kipfilet.jpg' },
            { name: 'Kipdrumsticks', price: '€4,99', description: 'Verse kipdrumsticks per 500g', image: 'https://www.example.com/kipdrumsticks.jpg' },
            { name: 'Kipdijfilet', price: '€6,99', description: 'Verse kipdijfilet per 500g', image: 'https://www.example.com/kipdijfilet.jpg' },
            { name: 'Kipgehakt', price: '€5,49', description: 'Vers kipgehakt per 500g', image: 'https://www.example.com/kipgehakt.jpg' },
            { name: 'Kipfilet met vel', price: '€5,99', description: 'Verse kipfilet met vel per 500g', image: 'https://www.example.com/kipfilet-met-vel.jpg' },
            { name: 'Kipfilet zonder vel', price: '€5,99', description: 'Verse kipfilet zonder vel per 500g', image: 'https://www.example.com/kipfilet-zonder-vel.jpg' },
            { name: 'Kipfilet gemarineerd', price: '€6,49', description: 'Verse gemarineerde kipfilet per 500g', image: 'https://www.example.com/kipfilet-gemarineerd.jpg' },
            { name: 'Kipfilet naturel', price: '€5,99', description: 'Verse kipfilet naturel per 500g', image: 'https://www.example.com/kipfilet-naturel.jpg' }
        ]},
        { id: 2, name: 'Rundervlees', image: 'https://static.vecteezy.com/ti/gratis/vector/p1/36773245-vlees-icoon-logo-ontwerp-sjabloon-vector.jpg', products: [
            { name: 'Rundergehakt', price: '€7,99', description: 'Vers rundergehakt per 500g', image: 'https://www.example.com/rundergehakt.jpg' },
            { name: 'Runderbiefstuk', price: '€12,99', description: 'Verse runderbiefstuk per 500g', image: 'https://www.example.com/runderbiefstuk.jpg' },
            { name: 'Runderstoofvlees', price: '€8,99', description: 'Vers runderstoofvlees per 500g', image: 'https://www.example.com/runderstoofvlees.jpg' },
            { name: 'Runderrollade', price: '€14,99', description: 'Verse runderrollade per 500g', image: 'https://www.example.com/runderrollade.jpg' },
            { name: 'Runderhamburger', price: '€6,99', description: 'Verse runderhamburger per 500g', image: 'https://www.example.com/runderhamburger.jpg' },
            { name: 'Runderworst', price: '€5,99', description: 'Verse runderworst per 500g', image: 'https://www.example.com/runderworst.jpg' },
            { name: 'Runderlappen', price: '€9,99', description: 'Verse runderlappen per 500g', image: 'https://www.example.com/runderlappen.jpg' },
            { name: 'Rundersteak', price: '€11,99', description: 'Verse rundersteak per 500g', image: 'https://www.example.com/rundersteak.jpg' }
        ]},
        { id: 3, name: 'Schapenvlees', image: 'https://static.vecteezy.com/ti/gratis/vector/p1/46330418-lam-boerderij-schapen-vlees-slagerij-winkel-wijnoogst-logo-vector.jpg', products: [
            { name: 'Lamskotelet', price: '€9,99', description: 'Verse lamskoteletten per 500g', image: 'https://www.example.com/lamskotelet.jpg' },
            { name: 'Lamsbout', price: '€14,99', description: 'Verse lamsbout per 500g', image: 'https://www.example.com/lamsbout.jpg' },
            { name: 'Lamsgehakt', price: '€8,99', description: 'Vers lamsgehakt per 500g', image: 'https://www.example.com/lamsgehakt.jpg' },
            { name: 'Lamsrack', price: '€19,99', description: 'Verse lamsrack per 500g', image: 'https://www.example.com/lamsrack.jpg' },
            { name: 'Lamsfilet', price: '€12,99', description: 'Verse lamsfilet per 500g', image: 'https://www.example.com/lamsfilet.jpg' },
            { name: 'Lamsrib', price: '€10,99', description: 'Verse lamsrib per 500g', image: 'https://www.example.com/lamsrib.jpg' },
            { name: 'Lamsbout met been', price: '€15,99', description: 'Verse lamsbout met been per 500g', image: 'https://www.example.com/lamsbout-met-been.jpg' },
            { name: 'Lamsbout zonder been', price: '€14,99', description: 'Verse lamsbout zonder been per 500g', image: 'https://www.example.com/lamsbout-zonder-been.jpg' }
        ]},
        { id: 4, name: 'Varkensvlees', image: 'https://img.freepik.com/premium-vector/varkensvlees-vintage-logo-sjabloon-retro-poster-voor-slagerij-boerderij-vlees-bedrijf-vector-illustratie_939711-3802.jpg', products: [
            { name: 'Varkenshaas', price: '€6,99', description: 'Verse varkenshaas per 500g', image: 'https://www.example.com/varkenshaas.jpg' },
            { name: 'Varkenskarbonade', price: '€5,99', description: 'Verse varkenskarbonade per 500g', image: 'https://www.example.com/varkenskarbonade.jpg' },
            { name: 'Varkensfilet', price: '€7,99', description: 'Verse varkensfilet per 500g', image: 'https://www.example.com/varkensfilet.jpg' },
            { name: 'Varkensgehakt', price: '€4,99', description: 'Vers varkensgehakt per 500g', image: 'https://www.example.com/varkensgehakt.jpg' },
            { name: 'Varkensrib', price: '€8,99', description: 'Verse varkensrib per 500g', image: 'https://www.example.com/varkensrib.jpg' },
            { name: 'Varkensschnitzel', price: '€6,49', description: 'Verse varkensschnitzel per 500g', image: 'https://www.example.com/varkensschnitzel.jpg' },
            { name: 'Varkensrollade', price: '€9,99', description: 'Verse varkensrollade per 500g', image: 'https://www.example.com/varkensrollade.jpg' },
            { name: 'Varkensworst', price: '€5,99', description: 'Verse varkensworst per 500g', image: 'https://www.example.com/varkensworst.jpg' }
        ]}
    ];

    return (
        <>
            <Head title="SubCategorieën" />
            <div className="container mx-auto p-2">
                <Header />
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
                <div className="relative mt-1 p-1 border rounded-lg cursor-pointer" onClick={() => window.location.href='/product'}>
                    <img src="https://vandevenvers.nl/wp-content/uploads/2024/06/Banner-Homepage-01.jpg" alt="Vleeswaren" className="w-full h-32 object-cover rounded-lg" />
                    <div className="absolute top-0 left-0 m-4">
                        <h2 className="text-xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">Vleeswaren</h2>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {subcategories.map(subcategory => (
                        <div key={subcategory.id} className="p-4 border rounded-lg flex flex-col items-center space-y-2 cursor-pointer">
                            <img src={subcategory.image} alt={subcategory.name} className="w-full h-32 object-cover rounded-lg" />
                            <div>
                                <h2 className="text-xl font-bold">{subcategory.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {subcategories.map(subcategory => (
                        subcategory.products.map((product, index) => (
                            <div key={index} className="p-4 border rounded-lg flex flex-col space-y-2">
                                <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600">{product.price}</p>
                                <p className="text-gray-600">{product.description}</p>
                            </div>
                        ))
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