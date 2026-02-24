function MovieCards(props) {

    const { image, title, description } = props

    const imageString = "http://localhost:3000/" + image

    return (
        <>
            <div className="w-27 bg-secondary p-3 my-4">
                <div className="w-100 h-50 d-flex align-items-center justify-content-center">
                    <img className="w-80 h-80" src={imageString} alt="" />
                </div>
                <div className="h-100 h-30">
                    <h2 className="fs-4">{title}</h2>
                    <p className="fs-6">{description}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCards