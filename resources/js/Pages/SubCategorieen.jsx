import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function SubCategorieen() {
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
                <hr className="my-2" />
                <div className="mt-4 p-4 border rounded-lg flex items-center space-x-4 cursor-pointer" onClick={() => window.location.href='/product'}>
                    <img src="path/to/product-category-image.jpg" alt="Productcategorie" className="w-1/4 rounded-lg" />
                    <div>
                        <h2 className="text-xl font-bold">Productcategorie</h2>
                    </div>
                </div>
                <div className="mt-4 flex justify-between space-x-4">
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/product'}>
                        <img src="path/to/product-category-image.jpg" alt="Productcategorie" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Productcategorie</h2>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/product'}>
                        <img src="path/to/product-category-image.jpg" alt="Productcategorie" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Productcategorie</h2>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/product'}>
                        <img src="path/to/product-category-image.jpg" alt="Productcategorie" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Productcategorie</h2>
                        </div>
                    </div>
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