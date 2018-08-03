import React, { Fragment } from 'react'
import CampsiteList from '../components/campsite-list.js'
import ReservationModal from '../components/reservation-modal.js'

export default class Campsites extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campsites: [],
      campground: null,
      showReservationModal: false
    }
    this.toggleReservationModal = this.toggleReservationModal.bind(this)
    this.retrieveAllCampgroundData = this.retrieveAllCampgroundData.bind(this)
  }

  toggleReservationModal(event) {
    this.setState({
      showReservationModal: !this.state.showReservationModal
    })
  }

  createReservation(reservation) {
    fetch('/reservations', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(reservation)
    }).then(res => res.json())
      .then(() => {
        window.location.hash = `#checkout?reservationId=${reservation.reservationId}`
      })
      .catch(err => console.error(err))
  }

  retrieveAllCampgroundData() {
    fetch('/campgrounds/' + this.props.params.id)
      .then(res => res.json())
      .then(campground => {
        this.setState({
          campground: campground
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

  componentDidMount() {
    this.retrieveAllCampgroundData()
  }

  render() {
    const activeSites = this.state.campsites.filter(site => {
      return site.facilityNum === this.props.params.facilityNum
    })
    if (!this.state.campground || !this.state.campsites) return null
    return (
      <Fragment>
        { this.state.campsites.length > 0 &&
        <ReservationModal
          createReservation={this.createReservation}
          isOpen={this.state.showReservationModal}
          close={this.toggleReservationModal}
          campground={this.state.campground}
          campsites={this.state.campsites}
          params={this.props.params}/> }
        <CampsiteList
          activeSites={activeSites}
          startReservation={this.toggleReservationModal}
          campground={this.state.campground}
          campsites={this.state.campsites}/>
      </Fragment>
    )
  }
}
