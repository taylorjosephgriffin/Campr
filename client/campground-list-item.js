import React from 'react'

export default function CampgroundListItem(props) {

  return (
    <div className='container-fluid'>
      <div className='row'>
      { props.campgrounds.map((camps, index) =>
        <div key={index} className='col-xl-4 col-lg-6 mt-4'>
          <a className='campground-link' href={`#details?id=${camps.id}`}>
            <div data-id={camps.id} className='card h-100 campground-card'>
              <div
                className='card-img-top campground-list-image h-100'
                style={{backgroundImage:`url(${camps.facilityPhotos[0]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'}}>
                  <h5 className='card-title py-2 campground-name text-light text-center'>{camps.facilityName}</h5>
                </div>
              <div className='card-body'>
                <p className='card-text h5'>{`$${camps.price}.00 / night`}</p>
              </div>
            </div>
          </a>
        </div>
      )}
      </div>
    </div>
  )
}
