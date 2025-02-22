import { Head } from '@inertiajs/react';

export default function OnderConstructie() {
    return (
        <>
            <Head title="Onder Constructie" />
            <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
                <div className="text-center max-w-7xl mx-auto">
                    <img src="https://img.freepik.com/premium-vector/website-onder-constructie_68747-13.jpg?w=1480" alt="Under Construction" className="w-full max-w-7xl mx-auto mb-4 rounded-lg shadow-lg max-h-96 object-contain" />
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Oeps.. deze site is nog onder constructie</h1>
                    <p className="text-gray-600 mb-4">We werken hard om deze site zo snel mogelijk beschikbaar te maken. Kom later terug voor updates!</p>
                    <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">Klik hier om terug te gaan naar de hoofdpagina</a>
                </div>
            </div>
        </>
    );
}