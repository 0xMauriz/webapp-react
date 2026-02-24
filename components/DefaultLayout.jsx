import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

function DefaultLayout() {

    return (
        <>
            <Navbar />
            <main className="vw-100 bg-color-dark">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout