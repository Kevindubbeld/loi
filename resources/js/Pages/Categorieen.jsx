import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function Categorieen() {
    const categories = [
        { id: 1, name: 'Category 1', image: 'path/to/category-image1.jpg' },
        { id: 2, name: 'Category 2', image: 'path/to/category-image2.jpg' },
        { id: 3, name: 'Category 3', image: 'path/to/category-image3.jpg' },
        { id: 4, name: 'Category 4', image: 'path/to/category-image4.jpg' },
        { id: 5, name: 'Category 5', image: 'path/to/category-image5.jpg' },
        { id: 6, name: 'Category 6', image: 'path/to/category-image6.jpg' },
        { id: 7, name: 'Category 7', image: 'path/to/category-image7.jpg' },
        { id: 8, name: 'Category 8', image: 'path/to/category-image8.jpg' },
        { id: 9, name: 'Category 9', image: 'path/to/category-image9.jpg' },
        { id: 10, name: 'Category 10', image: 'path/to/category-image10.jpg' },
        { id: 11, name: 'Category 11', image: 'path/to/category-image11.jpg' },
        { id: 12, name: 'Category 12', image: 'path/to/category-image12.jpg' },
    ];

    return (
        <>
            <Head title="Categorieen" />
            <div className="container mx-auto p-4">
                <Header />
                <div className="flex items-center py-4 border-b">
                    <input 
                        type="text" 
                        placeholder="Zoek een categorie" 
                        className="border rounded-l px-4 py-2 w-1/3"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categories.map(category => (
                        <div key={category.id} className="p-4 border rounded-lg flex flex-col items-center space-y-4 cursor-pointer" onClick={() => window.location.href='/subcategorieen'}>
                            <img src={category.image} alt={category.name} className="w-1/2 rounded-lg" />
                            <div>
                                <h2 className="text-xl font-bold">{category.name}</h2>
                                <p className="text-gray-600">This is the category promotion text.</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="text-2xl font-bold mt-4">Welcome to the Categorieën page!</h1>
                <p className="mt-4">This is the categories page.</p>
            </div>
        </>
    );
}