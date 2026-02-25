import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import MovieDetailsCard from "./MovieDetailsCard.jsx";
import axios from "axios"


function MovieDetailsData() {

    let titleParam = useParams();

    const endpoint = "http://localhost:3000/" + titleParam.title;

    const [singleMovie, setSingleMovie] = useState({});

    const getMovie = () => {

        axios.get(endpoint)

            .then((res) => setSingleMovie(res.data))
            .catch((err) => console.log(err))

    }

    useEffect(getMovie, [])

    console.log(singleMovie);



    return (
        <>
            <MovieDetailsCard
                key={singleMovie.id}
                title={singleMovie.title}
                description={singleMovie.abstract}
                image={singleMovie.image}
            />

        </>
    )

}

export default MovieDetailsData