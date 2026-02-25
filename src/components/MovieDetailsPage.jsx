import MovieDetailsData from "./MovieDetailsData.jsx"
import ReviewComponent from "./ReviewComponent.jsx"

function MovieDetailsPage() {

    return (
        <>
            <div className="bg-aquamarine d-flex justify-content-around">
                <div className="w-60 bg-secondary">
                    <MovieDetailsData />
                </div>
            </div>
            <ReviewComponent />

        </>
    )

}

export default MovieDetailsPage