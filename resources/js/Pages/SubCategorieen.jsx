import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function SubCategorieen() {
    return (
        <>
            <Head title="SubCategorieen" />
            <div className="container mx-auto p-4">
                <Header />
                <div className="flex items-center py-4 border-b">
                    <input 
                        type="text" 
                        placeholder="Zoek een productcategorie" 
                        className="border rounded-l px-4 py-2 w-1/3"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="mt-4 p-4 border rounded-lg flex items-center space-x-4 cursor-pointer" onClick={() => window.location.href='/product'}>
                    <img src="path/to/product-category-image.jpg" alt="Product Category" className="w-1/4 rounded-lg" />
                    <div>
                        <h2 className="text-xl font-bold">Product Category Promotion</h2>
                        <p className="text-gray-600">This is the product category promotion text.</p>
                    </div>
                </div>
                <div className="mt-4 flex justify-between space-x-4">
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/product'}>
                        <img src="path/to/product-category-image.jpg" alt="Product Category" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Product Category Promotion</h2>
                            <p className="text-gray-600">This is the product category promotion text.</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/product'}>
                        <img src="path/to/product-category-image.jpg" alt="Product Category" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Product Category Promotion</h2>
                            <p className="text-gray-600">This is the product category promotion text.</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center space-x-4 cursor-pointer w-1/3" onClick={() => window.location.href='/product'}>
                        <img src="path/to/product-category-image.jpg" alt="Product Category" className="w-1/4 rounded-lg" />
                        <div>
                            <h2 className="text-xl font-bold">Product Category Promotion</h2>
                            <p className="text-gray-600">This is the product category promotion text.</p>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-4">Welcome to the ProductCategorieen page!</h1>
                <p className="mt-4">This is the product categories page.</p>
            </div>
        </>
    );
}