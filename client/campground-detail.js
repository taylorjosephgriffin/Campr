import React, { Fragment } from 'react'
import queryString from './util/query-string.js'
import Service from './service.js'
import CampgroundDetailHeader from './campground-detail-header.js'
import CampsitesList from './campground-campsites-list.js'

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

    fetch('/campsites')
      .then(res => res.json())
      .then(sites => {
        this.setState({
          campsites: sites
        })
      })
  }

  carouselClick(event) {
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

  render() {
    if (!this.state.campground) return null
    if (!this.state.campsites) return null
    return (
      <Fragment>
        <CampgroundDetailHeader carouselClick={this.carouselClick} campground={this.state.campground} carouselIndex={this.state.carouselIndex} />
        <CampsitesList carouselClick={this.carouselClick} campground={this.state.campground} campsites={this.state.campsites} carouselIndex={this.state.carouselIndex} />
      </Fragment>
    )
  }
}
