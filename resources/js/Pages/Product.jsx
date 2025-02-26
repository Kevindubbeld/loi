import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Footer } from '@/Components/Footer';
import { SocialMedia } from '@/Components/SocialMedia';

export default function Product({ id }) {
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        axios.get(`/api/product/${id}`)
            .then(response => {
                setProduct(response.data);
                return axios.get(`/api/category/${response.data.category_id}`);
            })
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the product or category!", error);
            });
    }, [id]);

    if (!product || !category) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head title="Product" />
            <div className="container mx-auto p-2">
                <Header />
                <div className="relative mt-2 p-1 border rounded-lg cursor-pointer" onClick={() => window.location.href=`/subcategorieen/${category.id}`}>
                    <img src={category.img_url} alt={category.name} className="w-full h-24 object-cover rounded-lg" />
                    <div className="absolute top-0 left-0 m-4">
                        <h2 className="text-xl font-bold text-white bg-black bg-opacity-50 px-4 py-6 rounded">{category.name}</h2>
                    </div>
                </div>
                <div className="mt-0 p-4 border rounded-lg flex items-center justify-center space-x-4">
                    <div className="invisible w-1/4"></div>
                    <img src={product.img_url} alt={product.name} className="w-1/4 rounded-lg" style={{ marginRight: 'auto' }} />
                    <div className="flex-1 text-left">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <h2 className="text-lg font-bold text-gray-600">Prijs {product.price}</h2>
                        <p className="text-gray-600 text-sm">{product.short_description}</p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" style={{ marginLeft: 'auto', marginRight: '10%' }}>Voeg toe</button>
                </div>
                <div className="mt-0 p-4 border rounded-lg flex items-center space-x-4 w-full">
                    <div>
                        <h2 className="text-lg font-bold">Productomschrijving</h2>
                    </div>
                </div>
                <div className="mt-0 p-16 border rounded-lg flex items-center space-x-4 w-full">
                    <div>
                        <h2 className="text-lg font-bold">{product.long_description}</h2>
                    </div>
                </div>
                <div className="mt-0">
                    <SocialMedia />
                </div>
                <Footer />
            </div>
        </>
    );
}
