import React from 'react'

const Image=({Image,Url})=> {
    return (
        <div className="card my-1" id="card1">
        <img src={Image} className="card-img-top" id='img' alt="im" />
        <div className="card-body">
          <a href={Url} className="btn btn-outline-info text-center" id='bld'>Download Image</a>
        </div>
      </div>
    )
}

export default Image
