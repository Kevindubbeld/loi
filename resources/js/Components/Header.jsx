export default function Header() {
    return (
        <>
                <nav className="flex justify-between items-center py-4">
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-blue-500">Home</a></li>
                        <li><a href="/producten" className="text-blue-500">Producten</a></li>
                        <li><a href="/onderconstructie" className="text-blue-500">Aanbiedingen</a></li>
                        <li><a href="/onderconstructie" className="text-blue-500">Winkelwagen</a></li>
                        <li><a href="/onderconstructie" className="text-blue-500">Bestellen</a></li>
                    </ul>
                    <div>
                        <a href="/onderconstructie" className="text-blue-500">Account</a>
                    </div>
                </nav>
        </>
    );
}