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
        </>
    );
}   