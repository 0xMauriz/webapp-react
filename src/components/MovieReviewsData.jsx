import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieReviews from "./MovieReviewsCard";

function MovieReviewsData() {

    let titleParam = useParams();

    const endpoint = "http://localhost:3000/" + titleParam.title;

    const [movies, setMovies] = useState([]);

    const getMovie = () => {

        axios.get(endpoint)

            .then((res) => { setMovies(res.data); })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        getMovie();
    }, [titleParam.title, movies]);

    return (
        <>


            {movies.map(movieReview => (
                <MovieReviews
                    key={movieReview.id}
                    name={movieReview.name}
                    vote={movieReview.vote}
                    text={movieReview.text}
                />
            ))}

        </>
    )


}

export default MovieReviewsData