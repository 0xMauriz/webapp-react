function MovieReviews(props) {

    const { name, vote, text } = props

    return (
        <>
            <div className="w-100 bg-white py-4 px-2 d-flex flex-wrap">
                <p className="w-100 text-start">{name}</p>
                <p className="w-100 text-start">{vote}</p>
                <p className="w-100 text-start">{text}</p>
            </div>
        </>
    )

}

export default MovieReviews