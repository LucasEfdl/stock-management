import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h2>DashBoard</h2>
            <Outlet />
        </>
    )
}