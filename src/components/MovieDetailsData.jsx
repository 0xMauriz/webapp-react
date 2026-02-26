import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import MovieDetailsCard from "./MovieDetailsCard.jsx";
import MovieReviews from "./MovieReviews.jsx"
import axios from "axios"


function MovieDetailsData() {

    let titleParam = useParams();

    const endpoint = "http://localhost:3000/" + titleParam.title;

    const [movie, setMovie] = useState({});

    const getMovie = () => {

        axios.get(endpoint)

            .then((res) => setMovie(res.data[0]))
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        getMovie();
    }, [titleParam.title]);





    console.log(movie);




    return (
        <>

            <MovieDetailsCard
                key={movie.id}
                title={movie.title}
                description={movie.abstract}
                image={movie.image}
            />


        </>
    )

}

export default MovieDetailsData