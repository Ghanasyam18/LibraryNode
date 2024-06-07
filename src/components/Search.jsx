import React from 'react'
import NavBar from './NavBar'

const Search = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="label form-label">Book Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-dark">SEARCH</button>
                </div>
            </div>
        </div>
    )
}

export default Search