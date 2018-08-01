import React, { Fragment } from 'react'
import * as qs from 'qs'
import Service from './service.js'
import CampsiteListItems from './campsite-list-items.js'
import ReservationModal from './reservation-modal.js'

export default class CampsitesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campsites: [],
      modalClicked: false
    }
    this.renderModal = this.renderModal.bind(this)
  }

  renderModal(event) {
    this.setState({
      modalClicked: !this.state.modalClicked
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
      .then(data => console.log(data))
      .catch(err => console.error(err))

      window.location.hash = `#checkout?reservationId=${reservation.reservationId}`
  }

  componentDidMount() {
    const idQuery = location.hash.replace(/^(.*?)\?/, '')
    const id = qs.parse(idQuery).id
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
    localStorage.setItem('hash', window.location.hash)
  }

  render() {
    return (
      !this.state.modalClicked
        ? <Fragment>
            <CampsiteListItems
              renderModal={this.renderModal}
              modalClicked={this.state.modalClicked}
              campground={this.state.campground}
              campsites={this.state.campsites}/>
          </Fragment>
        : <Fragment>
            <ReservationModal
              createReservation={this.createReservation}
              renderModal={this.renderModal}
              modalClicked={this.state.modalClicked}
              campground={this.state.campground}
              campsites={this.state.campsites}/>
            <CampsiteListItems
              renderModal={this.renderModal}
              modalClicked={this.state.modalClicked}
              campground={this.state.campground}
              campsites={this.state.campsites}/>
          </Fragment>
    )
  }
}
