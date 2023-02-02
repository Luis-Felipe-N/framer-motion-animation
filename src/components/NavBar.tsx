import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <header>
            <nav className="texttx-2x1 font-medium z-20 relative">
                <ul className="flex gap-4">
                    <Link to={`/`}>
                        <li>Home</li>
                    </Link>
                    <Link to={`/contato`}>
                        <li>Contato</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}