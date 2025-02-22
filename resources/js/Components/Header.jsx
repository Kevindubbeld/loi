export default function Header() {
    return (
        <>
                <nav className="flex justify-between items-center py-">
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-black">Home</a></li>
                        <li><a href="/categorieen" className="text-black">Producten</a></li>
                        <li><a href="/onderconstructie" className="text-black">Aanbiedingen</a></li>
                        <li><a href="/onderconstructie" className="text-black">Winkelwagen</a></li>
                        <li><a href="/onderconstructie" className="text-black">Bestellen</a></li>
                    </ul>
                    <div>
                        <a href="/onderconstructie" className="text-black">Account</a>
                    </div>
                </nav>
        </>
    );
}