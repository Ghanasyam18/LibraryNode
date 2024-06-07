import React from 'react'
import NavBar from './NavBar'

const Delete = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="label form-label">Book Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <button className="btn btn-danger">DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default Delete