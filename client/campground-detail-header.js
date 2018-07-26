import React from 'react'
import Service from './service.js'

export default function CampgroundDetailHeader(props) {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-12'>
          <div className='campground-detail-card'>
            <div className='card-body'>
                <div className='row card-detail-page'>
                  <div className='card col-xl-4 col-lg-12 col-md-12 col-12 camp-detail-name'>
                    <hr className='hr-detail'/>
                    <h1 className='card-title py-2 text-center text-dark mt-3'>{ props.campground.facilityName }</h1>
                    <hr className='hr-detail'/>
                    <div className='container-fluid'>
                      <div className='row mt-4'>
                        <h3 className='text-dark'><u>Activities</u></h3>
                      </div>
                      <div className='row'>
                      { props.campground.amenities.map((amenity, index) =>
                        <ul key={index} className='list-group col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 text-center'>
                          <li className='list-group-item mt-3'>{amenity}</li>
                        </ul>
                      )}
                      </div>
                      <div className='row mt-3'>
                        <div className='col pl-0'>
                          <h3 className='text-dark'><u>Accomodations</u></h3>
                        </div>
                      </div>
                      <div className='row mt-1'>
                        <Service hasService={props.campground.petsAllowed} service={'Allows pets'} />
                        <Service hasService={props.campground.hasFireRing} service={'Fire Rings'} />
                        <Service hasService={props.campground.hasAmps} service={'Amps'} />
                        <Service hasService={props.campground.hasSewer} service={'Sewer'} />
                        <Service hasService={props.campground.hasWater} service={'Water'} />
                        <Service hasService={props.campground.hasRestroom} service={'Restroom'} />
                      </div>
                      <div className='row mt-4'>
                        <ul className='list-group col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-2 col-12'>
                          <li className='list-group-item'>Check-in: {props.campground.checkIn}:00pm</li>
                        </ul>
                        <ul className='list-group col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-2 col-12'>
                          <li className='list-group-item'>
                            Check-out: {props.campground.checkOut}:00pm
                          </li>
                        </ul>
                      </div>
                      <div className='row justify-content-end'>
                        <div className='col-xl-4 col-lg-4 col-6 mt-5 pb-4 pl-0 translate-2'>
                          <a href={`#campsite?facilityNum=${props.campground.facilityNum}&id=${props.campground.id}`}>
                            <button className='btn btn-secondary shadow view-campsites mt-4 w-100'>
                              Campsites
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel col-xl-8 col-lg-12 col-md-12'>
                    <div className='carousel-inner'>
                     { props.campground.facilityPhotos.map((photo, index) =>
                       <div key={index} className={ index === props.carouselIndex ? 'carousel-item active' : 'carousel-item'}>
                         <img className='d-block w-100 h-100 detail-images' src={photo} alt={`slide #${index + 1}`}/>
                           <ol className='carousel-indicators'>
                           { props.campground.facilityPhotos.map((photo, index) =>
                             <li key={index} className={ index === props.carouselIndex ? 'active' : 'not-active h-50'}></li>
                           )}
                           </ol>
                           <a className='carousel-control-prev' onClick={props.carouselClick} role='button' data-slide='prev'>
                             <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                             <span className='sr-only'>Previous</span>
                           </a>
                           <a className='carousel-control-next' onClick={props.carouselClick} role='button' data-slide='next'>
                             <span className='carousel-control-next-icon' aria-hidden='true'></span>
                             <span className='sr-only'>Next</span>
                           </a>
                       </div>
                     )}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
