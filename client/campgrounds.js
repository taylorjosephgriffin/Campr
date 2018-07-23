import React from 'react'

export default function Campgrounds(props) {

  return (
    <div className='container-fluid'>
      <div className='row'>
      { props.campgrounds.map((camps, index) =>
        <div key={index} className='col-xl-4 mt-4'>
          <div className='card h-100'>
            <div
              className='card-img-top campground-list-image h-100'
              style={{backgroundImage:`url(${camps.facilityPhotos[0]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'}}>
                <h5 className='card-title campground-name text-light text-center display-4'>{camps.facilityName}</h5>
              </div>
            <div className='card-body'>
              <p className='card-text h5'>{`$${camps.price}.00 / night`}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
