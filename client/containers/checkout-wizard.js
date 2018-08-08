import React from 'react'
import Checkout from '../components/checkout.js'
import Stepper from '../components/stepper.js'
import EditReservationModal from '../components/edit-reservation-modal.js'
import DeleteReservationModal from '../components/delete-reservation-modal.js'

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
        confirm: 33.33,
        payment: 0,
        finished: 0
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
    this.finishedView = this.finishedView.bind(this)
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
        confirm: 33.33
      },
      view: 'confirm'
    })
    window.scrollTo(0, 0)
  }

  paymentView() {
    this.setState({
      step: {
        confirm: 33.33,
        payment: 33.33
      },
      view: 'payment'
    })
    window.scrollTo(0, 0)
  }

  finishedView() {
    this.setState({
      step: {
        confirm: 33.33,
        payment: 33.33,
        finished: 33.33
      }
    })
  }

  deleteReservation() {
    fetch('/reservations/' + this.props.params.reservationId,
      {
        method: 'DELETE'
      })
      .then(res => {
        res.json()
        window.location.hash = 'campground-list'
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

  render() {
    console.log(this.state)
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
              view={this.state.view}/>
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
