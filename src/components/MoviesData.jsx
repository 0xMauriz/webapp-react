import { useState, useEffect } from "react"
import axios from "axios"
import MovieCards from "./MovieCards.jsx";

const endpoint = "http://localhost:3000";


function MoviesData() {

    const [movies, setMovies] = useState([]);

    const getMovie = () => {

        axios.get(endpoint)
            .then((res) => setMovies(res.data))
            .catch((err) => console.log(err)
            )

    }

    useEffect(getMovie, []);


    return (
        <>

            {movies.map(movie => (
                <MovieCards
                    key={movie.id}
                    title={movie.title}
                    description={movie.abstract}
                    image={movie.image}
                />
            ))}

        </>
    )
}

export default MoviesData