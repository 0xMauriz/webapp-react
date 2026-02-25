import { useState, useEffect } from 'react'

function ReviewComponent() {

    return (
        <><div className="w-30 py-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="reviewer-name" className="form-label d-flex align-self-start">Nome:</label>
                    <input type="email" className="form-control" id="reviewer-name" aria-describedby="emailHelp" placeholder='Inserire proprio nome' />
                </div>
                <div className="mb-3">
                    <label htmlFor="reviewer-vote" className="form-label d-flex align-self-start">Voto</label>
                    <input type="password" className="form-control" id="reviewer-vote" />
                </div>
                <div className="mb-3">
                    <label htmlFor="review" className="form-label d-flex align-self-start">Recensione:</label>
                    <input type="password" className="form-control" id="review" placeholder='Inserisci valutazione' />
                </div>
                <button type="submit" className="btn btn-primary d-flex align-self-start">Submit</button>
            </form></div>
        </>
    )

}

export default ReviewComponent