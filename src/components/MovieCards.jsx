function MovieCards(props) {

    const { image, title, description } = props

    const imageString = "http://localhost:3000/" + image

    return (
        <>
            <div className="w-27">
                <div className="w-100 h-70">
                    <img className="w-50 h-50" src={imageString} alt="" />
                </div>
                <div className="h-100 h-30">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCards