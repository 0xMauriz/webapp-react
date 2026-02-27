import { useState, useEffect } from 'react'
import axios from "axios"

function AddReview() {

    const endpoint = "http://localhost:3000";


    const [review, setReview] = useState({
        movie_id: "",
        name: "",
        vote: "",
        text: ""
    })

    function handleChange(e) {

        const { name, value } = e.target;

        setReview(arrayTemp => ({
            ...arrayTemp,
            [name]: value
        }))

        console.log(review);

    }


    function handleSubmit(e) {

        e.preventDefault();

        axios.post(endpoint, review)
            .then(res => console.log(res.data))
            .catch(err => console.log(err)
            )
    }

    return (
        <><div className="w-30 py-3 px-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="reviewer-name" className="form-label d-flex align-self-start">Nome:</label>
                    <input name="name" type="text" className="form-control" id="reviewer-name" aria-describedby="emailHelp" placeholder='Inserire proprio nome' value={review.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="reviewer-vote" className="form-label d-flex align-self-start">Voto</label>
                    <input name="vote" type="text" className="form-control" id="reviewer-vote" value={review.vote} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="review" className="form-label d-flex align-self-start">Recensione:</label>
                    <input name="text" type="text" className="form-control" id="review" placeholder='Inserisci valutazione' value={review.text} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="review" className="form-label d-flex align-self-start">Recensione:</label>
                    <input name="movie_id" type="text" className="form-control" id="review" placeholder='Inserisci valutazione' value={review.movie_id} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary d-flex align-self-start">Submit</button>
            </form></div>
        </>
    )

}

export default AddReview