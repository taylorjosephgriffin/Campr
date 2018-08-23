import React from 'react'

export default function CampgroundDetailCarousel(props) {

  return (
    <div className='carousel col-xl-8 col-lg-12 col-md-12'>
      <div className='carousel-inner'>
        { props.campground.facilityPhotos.map((photo, index) =>
          <div key={index} className={ index === props.carouselIndex ? 'carousel-item active' : 'carousel-item'}>
            <img className='d-block w-100 h-100 detail-images' src={photo} alt={`slide #${index + 1}`}/>
            <ol className='carousel-indicators'>
              { props.campground.facilityPhotos.map((photo, index) =>
                <li key={index} style={ index === props.carouselIndex ? {backgroundColor: 'white'} : {backgroundColor: 'rgba(0, 0, 0, 0.5)'} } className={ index === props.carouselIndex ? 'active' : 'not-active' }></li>
              )}
            </ol>
            <a className='carousel-control-prev' style={{background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8), transparent)'}} onClick={props.carouselClick} role='button' data-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a className='carousel-control-next' style={{background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.8), transparent)'}} onClick={props.carouselClick} role='button' data-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
