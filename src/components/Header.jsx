import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Link to="/">Stock Management</Link>
            <nav>
                <Link to="/">inicio</Link>
                <Link to="items">Items</Link>
            </nav>
        </div>
    )
}