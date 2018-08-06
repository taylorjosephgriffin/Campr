import React from 'react'
import Confirm from '../components/confirm.js'
import Stepper from '../components/stepper.js'
import EditReservationModal from '../components/edit-reservation-modal.js'

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
        confirm: 33.33
      },
      showEditModal: false
    }
    this.refreshReservations = this.refreshReservations.bind(this)
    this.toggleEditModal = this.toggleEditModal.bind(this)
  }

  toggleEditModal(event) {
    this.setState({
      showEditModal: !this.state.showEditModal
    })
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

  render() {
    return (
      <div>
        <div style={divStyle1}>
          <div style={layer}>
          </div>
        </div>
        <Stepper step={this.state.step}/>
        {this.state.reservation &&
          <div>
            <Confirm
              params={this.props.params}
              renderPrice={this.renderPrice}
              renderDetails={this.renderDetails}
              reservation={this.state.reservation}
              toggleEditModal={this.toggleEditModal} />
            <EditReservationModal
              campsite={this.state.reservation.campsite}
              params={this.props.params}
              reservation={this.state.reservation}
              isOpen={this.state.showEditModal}
              close={this.toggleEditModal} />
          </div>
        }
      </div>

    )
  }
}
