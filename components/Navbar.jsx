import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary w-100 h-15">
                <div className="w-100 container-fluid">
                    <NavLink className="navbar-brand" to="/">MovieFlix</NavLink>
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-around">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar