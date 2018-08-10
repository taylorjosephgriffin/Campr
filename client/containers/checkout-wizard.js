import React from 'react'
import Checkout from '../components/checkout.js'
import Stepper from '../components/stepper.js'
import EditReservationModal from '../components/edit-reservation-modal.js'
import DeleteReservationModal from '../components/delete-reservation-modal.js'
import uuid from 'uuid/v4'

let image = 'https://web.sonoma.edu/campusrec/images/wwp/backpack_tahoe.jpg'

const divStyle1 = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  zIndex: '-999999'
}

const layer = {
  backgroundColor: 'rgba(241, 150, 164, 0.5)',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%'
}

export default class CheckoutWizard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      step: {
        confirm: 50,
        payment: 0
      },
      view: 'confirm',
      showEditModal: false,
      showDeleteModal: false
    }
    this.refreshReservations = this.refreshReservations.bind(this)
    this.updateReservation = this.updateReservation.bind(this)
    this.toggleEditModal = this.toggleEditModal.bind(this)
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this)
    this.deleteReservation = this.deleteReservation.bind(this)
    this.paymentView = this.paymentView.bind(this)
    this.confirmView = this.confirmView.bind(this)
    this.handleOrderSubmit = this.handleOrderSubmit.bind(this)
    this.createOrder = this.createOrder.bind(this)
  }

  toggleEditModal(event) {
    this.setState({
      showEditModal: !this.state.showEditModal
    })
  }

  toggleDeleteModal(event) {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    })
  }

  confirmView() {
    this.setState({
      step: {
        confirm: 50
      },
      view: 'confirm'
    })
    window.scrollTo(0, 0)
  }

  paymentView() {
    this.setState({
      step: {
        confirm: 50,
        payment: 50
      },
      view: 'payment'
    })
    window.scrollTo(0, 0)
  }

  handleOrderSubmit(event) {
    event.preventDefault()
    const orderData = new FormData(event.target)
    const todaysDate = new Date()
    const orderDate = todaysDate.getMonth() + '/' + todaysDate.getDate() + '/' + todaysDate.getFullYear()
    const orderObj = {
      orderId: uuid(),
      orderDate: orderDate,
      startDate: this.state.reservation.reservation.startDate,
      endDate: this.state.reservation.reservation.endDate,
      guests: this.state.reservation.reservation.guests,
      vehicles: this.state.reservation.reservation.vehicles,
      email: orderData.get('email'),
      firstName: orderData.get('firstName'),
      lastName: orderData.get('lastName'),
      park: this.state.reservation.campground.facilityName,
      site: this.state.reservation.campsite.siteNumber
    }
    this.createOrder(orderObj)
    this.deleteReservation()
    window.location.hash = `confirmation?orderId=${orderObj.orderId}&view=confirmation-page`
  }

  deleteReservation() {
    fetch('/reservations/' + this.props.params.reservationId,
      {
        method: 'DELETE'
      })
      .catch(err => console.error(err))
  }

  refreshReservations() {
    fetch('/reservations/' + this.props.params.reservationId)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reservation: data
        })
      })
  }

  componentDidMount() {
    this.refreshReservations()
  }

  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      this.refreshReservations()
    }
  }

  updateReservation(update) {
    fetch('/reservations/' + this.props.params.reservationId, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(update)
    }).then(res => {
      res.json()
      this.refreshReservations()
    })
      .catch(err => console.error(err))
  }

  createOrder(order) {
    fetch('/orders', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(order)
    }).then(res => res.json())
      .catch(err => console.error(err))
  }

  render() {
    console.log(this.state.view)
    return (
      <div>
        <div style={divStyle1}>
          <div style={layer}>
          </div>
        </div>
        <Stepper step={this.state.step}/>
        {this.state.reservation &&
          <div>
            <Checkout
              params={this.props.params}
              renderPrice={this.renderPrice}
              renderDetails={this.renderDetails}
              reservation={this.state.reservation}
              toggleEditModal={this.toggleEditModal}
              toggleDeleteModal={this.toggleDeleteModal}
              paymentView={this.paymentView}
              confirmView={this.confirmView}
              view={this.state.view}
              handleOrderSubmit={this.handleOrderSubmit}/>
            <EditReservationModal
              campsite={this.state.reservation.campsite}
              params={this.props.params}
              reservation={this.state.reservation}
              isOpen={this.state.showEditModal}
              updateReservation={this.updateReservation}
              close={this.toggleEditModal} />
            <DeleteReservationModal
              isOpen={this.state.showDeleteModal}
              close={this.toggleDeleteModal}
              deleteReservation={this.deleteReservation}/>
          </div>
        }
      </div>

    )
  }
}
