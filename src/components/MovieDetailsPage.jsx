import MovieDetailsData from "./MovieDetailsData.jsx"
import ReviewComponent from "./AddReview.jsx"
import MovieReviewsData from "./MovieReviewsData.jsx"

function MovieDetailsPage() {

    return (
        <>
            <div className="bg-aquamarine d-flex justify-content-around">
                <div className="w-60 bg-secondary">
                    <MovieDetailsData />
                </div>
            </div>
            <div className="w-100 py-4 px-4 bg-secondary">
                <MovieReviewsData />
            </div>
            <ReviewComponent />

        </>
    )

}

export default MovieDetailsPage