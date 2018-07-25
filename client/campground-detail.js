import React from 'react'
import queryString from './util/query-string.js'

export default class CampgroundDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      carouselIndex: 0
    }
    this.carouselClick = this.carouselClick.bind(this)
  }

  componentDidMount() {
    const id = queryString.parse(location.hash).id
    fetch('/campgrounds/' + id)
      .then(res => res.json())
      .then(camp => {
        this.setState({
          campground: camp
        })
    })
  }

  carouselClick(event) {
    const carouselIndex = this.state.carouselIndex
    const campground = this.state.campground

    if (carouselIndex < campground.facilityPhotos.length - 1 && event.currentTarget.dataset.slide === 'next') {
      this.setState({
        carouselIndex: carouselIndex + 1
      })
    }
    else if (carouselIndex > 0 && event.currentTarget.dataset.slide === 'prev') {
      this.setState({
        carouselIndex: carouselIndex - 1
      })
    }
    return null
  }

  services(service) {
    if (service) {
      return <i className='far fa-check-circle text-success d-block'></i>
    }
    else {
      return <i className='far fa-times-circle text-danger d-block'></i>
    }
  }

  render() {
    return (
      !this.state.campground
        ? null
        : <div className='container-fluid'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='campground-detail-card'>
                  <div className='card-body'>
                      <div className='row card-detail-page'>
                        <div className='card col-xl-4 col-lg-12 col-md-12 col-12 camp-detail-name'>
                          <hr className='hr-detail'/>
                          <h1 className='card-title py-2 text-center text-dark mt-3'>{ this.state.campground.facilityName }</h1>
                          <hr className='hr-detail'/>
                          <div className='container-fluid'>
                            <div className='row mt-4'>
                              <h3 className='text-dark'><u>Amenities</u></h3>
                            </div>
                            <div className='row'>
                            { this.state.campground.amenities.map((amenity, index) =>
                              <ul key={index} className='list-group col-xl-4 col-lg-6 col-md-6 col-12'>
                                <li className='list-group-item mt-3'>{amenity}</li>
                              </ul>
                            )}
                            </div>
                            <div className='row mt-3'>
                              <div className='col pl-0'>
                                <h3 className='text-dark'><u>Services</u></h3>
                              </div>
                            </div>
                            <div className='row mt-1'>
                              <div className='col-xl-6 col-12 mt-3 pl-0'>
                                <h5>Allows pets? {this.services(this.state.campground.petsAllowed)}</h5>
                              </div>
                              <div className='col-xl-6 col-12 mt-3 pl-0'>
                                <h5>Water hookup? {this.services(this.state.campground.hasWater)}</h5>
                              </div>
                              <div className='col-xl-6 col-12 mt-3 pl-0'>
                                <h5>Sewer hookup? {this.services(this.state.campground.hasSewer)}</h5>
                              </div>
                              <div className='col-xl-6 col-lg-12 col-12 mt-3 pl-0'>
                                <h5>Amps available? {this.services(this.state.campground.hasAmps)}</h5>
                              </div>
                              <div className='col-xl-6 col-12 mt-3 pl-0'>
                                <h5>Fire rings? {this.services(this.state.campground.hasFireRing)}</h5>
                              </div>
                              <div className='col-xl-6 col-lg-12 col-12 mt-3 pl-0'>
                                <h5>Public restrooms? {this.services(this.state.campground.hasRestroom)}</h5>
                              </div>
                            </div>
                            <div className='row mt-3'>
                              <div className='col-6 pl-0'>
                                <h5>Check-in:</h5>
                              </div>
                              <div className='col-6 pl-0'>
                                <h5>Check-out:</h5>
                              </div>
                            </div>
                            <div className='row'>
                              <div className='col-6'>
                                <h6>{`${this.state.campground.checkIn}:00PM`}</h6>
                              </div>
                              <div className='col-6'>
                                <h6>{`${this.state.campground.checkOut}:00PM`}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='carousel col-xl-8 col-lg-12 col-md-12'>
                          <ol className='carousel-indicators'>
                          { this.state.campground.facilityPhotos.map((photo, index) =>
                            <li key={index} className={ index === this.state.carouselIndex ? 'active' : 'not-active'}></li>
                          )}
                          </ol>
                          <div className='carousel-inner'>
                           { this.state.campground.facilityPhotos.map((photo, index) =>
                             <div key={index} className={ index === this.state.carouselIndex ? 'carousel-item active' : 'carousel-item'}>
                               <img className='d-block w-100 h-100 detail-images' src={photo} alt={`slide #${index + 1}`}/>
                             </div>
                           )}
                          </div>
                          <a className='carousel-control-prev' onClick={this.carouselClick} role='button' data-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                            <span className='sr-only'>Previous</span>
                          </a>
                          <a className='carousel-control-next' onClick={this.carouselClick} role='button' data-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'></span>
                            <span className='sr-only'>Next</span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-8 offset-2'>
              </div>
            </div>
          </div>
    )
  }
}
