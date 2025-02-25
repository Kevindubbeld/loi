import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Footer } from '@/Components/Footer';
import { SocialMedia } from '@/Components/SocialMedia';

export default function SubCategorieen({ id }) {
    const [category, setCategory] = useState({});

    useEffect(() => {
        axios.get(`/api/category/${id}`)
            .then(response => {
                console.log(response.data);
                setCategory(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the subcategories!", error);
            });
    }, [id]);

    return (
        <>
            <Head title="SubCategorieën" />
            <div className="container mx-auto p-2">
                <Header />
                <div className="relative mt-1 p-1 border rounded-lg cursor-pointer">
                    <img src={category.img_url} alt={category.name} className="w-full h-24 object-cover rounded-lg" />
                    <div className="absolute top-0 left-0 m-4">
                        <h2 className="text-xl font-bold text-white bg-black bg-opacity-50 px-4 py-6 rounded">{category.name}</h2>
                    </div>
                </div>

                <div className="mt-0 flex flex-col space-y-0">
                    {category.subcategories?.map(subcategory => (
                        <div key={subcategory.id} className="flex flex-row">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                <div className="p-2 border rounded-lg flex flex-col items-center space-y-2 cursor-pointer">
                                    <img src={subcategory.img_url} alt={subcategory.name} className="h-16 object-cover rounded-lg" />
                                    <div>
                                        <h2 className="text-lg font-bold">{subcategory.name}</h2>
                                    </div>
                                </div>
                                {subcategory.products.map((product) => (
                                    <div key={product.id} className="p-2 border rounded-lg flex flex-col space-y-2"  onClick={() => window.location.href='/product/' + product.id}>
                                        <div className='flex flex-row space-x-2 justify-center'>
                                            <img src={product.img_url} alt={product.name} className="h-16 object-cover rounded-lg" />
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
                <SocialMedia />
                <Footer />
            </div>
        </>
    );
}