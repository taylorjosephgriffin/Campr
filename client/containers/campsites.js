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
      .catch(err => console.error(err))

    window.location.hash = `#checkout?reservationId=${reservation.reservationId}`
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

  render() {
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
          startReservation={this.toggleReservationModal}
          campground={this.state.campground}
          campsites={this.state.campsites}/>
      </Fragment>
    )
  }
}
