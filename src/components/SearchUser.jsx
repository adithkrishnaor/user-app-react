import React from 'react'

const SearchUser = () => {
  return (
    <div>
        <div className="container">
        <div className="row g-3">
            <center>
                <h3>Search User</h3>
            </center>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">User Name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                    <button className="btn btn-primary">Search</button>
                </center>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SearchUser