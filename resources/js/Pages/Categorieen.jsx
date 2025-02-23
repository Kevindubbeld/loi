import Header from '@/Components/Header';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Footer } from '@/Components/Footer';
import { SocialMedia } from '@/Components/SocialMedia';

export default function Categorieen() {
    const [categories, setCategories] = useState([]);
    const { props } = usePage();

    useEffect(() => {
        axios.get('/api/category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the categories!', error);
            });
    }, []);

    return (
        <>
            <Head title="Categorieën" />
            <div className="container mx-auto p-2">
                <Header />
                <hr className="my-2" />
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {categories.map(category => (
                        <div key={category.id} className="p-1 border rounded-lg flex flex-col items-center justify-center space-y-2 cursor-pointer text-center" onClick={() => window.location.href='/subcategorieen/' + category.id}>
                            <img src={category.img_url} alt={category.name} className="w-1/2 rounded-lg" />
                            <div>
                                <h2 className="text-xl font-bold">{category.name}</h2>
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