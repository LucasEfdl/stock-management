import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function RootLayout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                <h2>Developer by <a href="https://github.com/LucasEfdl" target="blank">LucasEfdl</a></h2>
            </footer>
        </div>
    )
}