import { useState, useEffect } from "react"
import MoviesData from "./MoviesData.jsx"



function Homepage() {

    return (
        <>
            <div className="w-100 d-flex justify-content-around bg-secondary">
                <div className="w-80 px-3 py-2 d-flex justify-content-around flex-wrap bg-aquamarine">
                    <MoviesData />
                </div>
            </div>
        </>
    )
}

export default Homepage