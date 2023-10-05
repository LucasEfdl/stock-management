import { Link, Outlet } from "react-router-dom";

export default function Itemlayout() {
    return (
        <div>
            <h2>Items em stock</h2>
            <nav>
                <Link to="">Todos os items</Link>
                <Link to="new">Add item</Link>
            </nav>
            <section>
                <Outlet />
            </section>
        </div>
    )
}