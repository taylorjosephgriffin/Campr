import React from 'react'

export default function CampgroundListItem(props) {

  return (
    <div className='container-fluid'>
      <div className='row'>
        { props.campgrounds.map((camps, index) =>
          <div key={index} className='col-xl-4 col-lg-6 mb-3 translate-2'>
            <a className='campground-link' href={`#details?id=${camps.id}`}>
              <div data-id={camps.id} className='card h-100 campground-card shadow'>
                <div
                  className='card-img-top shadow campground-list-image h-100'
                  style={{backgroundImage: `url(${camps.facilityPhotos[0]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'}}>
                  <h5 className='card-title py-2 campground-name text-light text-center'>{camps.facilityName}</h5>
                </div>
                <div className='card-body campground-body py-2 pl-2'>
                  <p className='card-text h5 mt-4'>{`$${camps.price}.00 / night`}</p>
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
