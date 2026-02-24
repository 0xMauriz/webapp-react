import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary w-100 h-15">
                <div className="w-50 container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <div className="w-80" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-around">
                            <li className="nav-item">
                                {/* Link from react-router */}
                                <NavLink to="/">Home Page</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/whoarewe">About us?</NavLink>
                            </li>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar