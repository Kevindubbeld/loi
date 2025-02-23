export function Footer() {
    return (
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

    );
}