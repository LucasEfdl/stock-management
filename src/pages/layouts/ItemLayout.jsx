import { Link, Outlet } from "react-router-dom";

export default function Itemlayout() {
    return (
        <div>
            <nav className="nav-bar">
                <Link 
                    className="links" 
                    to=""
                >
                    Todos os items
                </Link>
                <Link 
                    className="links active" 
                    to="new"
                >
                    Add item
                </Link>
            </nav>
            <section>
                <Outlet />
            </section>
        </div>
    )
}