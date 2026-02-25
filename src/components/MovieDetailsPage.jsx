import MovieDetailsCard from "./MovieDetailsData.jsx"
import ReviewComponent from "./ReviewComponent.jsx"

function MovieDetailsPage() {

    return (
        <>
            <div className="bg-aquamarine">
                <div className="w-60 bg-secondary">
                    <MovieDetailsCard />
                </div>
            </div>
            <ReviewComponent />

        </>
    )

}

export default MovieDetailsPage