import { Link, Outlet, useLocation } from "react-router-dom";

export default function Itemlayout() {
    const { pathname } = useLocation()

    return (
        <div>
            <nav className="nav-bar">
                <Link 
                    className={`links ${pathname === "/items" ? "active" : ""}`} 
                    to=""
                >
                    Todos os items
                </Link>
                <Link 
                    className={`links ${pathname === "/items/new" ? "active" : ""}`} 
                    to="new"
                >
                    Add item
                </Link>
            </nav>
            <Outlet />
        </div>
    )
}