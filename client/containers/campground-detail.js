import React, { Fragment } from 'react'
import * as qs from 'qs'
import Service from '../util/service.js'
import CampgroundDetailHeader from '../components/campground-detail-header.js'

export default class CampgroundDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      carouselIndex: 0
    }
    this.carouselClick = this.carouselClick.bind(this)
  }

  componentDidMount() {
    fetch('/campgrounds/' + this.props.params.id)
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
    const carouselIndex = this.state.carouselIndex

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
    return (
      <CampgroundDetailHeader carouselClick={this.carouselClick} campground={this.state.campground} carouselIndex={this.state.carouselIndex} />
    )
  }
}
