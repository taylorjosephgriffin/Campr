import React from 'react'
import { Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input } from 'reactstrap'
import DateRangeComponent from './date-range-picker.js'

export default class EditReservationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValid: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  renderOptions(option) {
    const max = parseInt(option, 10)
    const options = []
    for (let i = 1; i < max + 1; i++) {
      options.push(i)
    }
    return options
  }

  handleSubmit(event) {
    event.preventDefault()
    const resData = new FormData(event.target)
    const reservationObj = {
      guests: resData.get('guests'),
      vehicles: resData.get('vehicles'),
      startDate: resData.get('startDate'),
      endDate: resData.get('endDate')
    }

    if (!reservationObj.startDate || !reservationObj.endDate) {
      this.setState({
        formInvalid: true
      })
    }
    else {
      this.props.updateReservation(reservationObj)
      this.props.close()
    }
  }

  render() {
    return (
      <div>
        <Modal centered isOpen={this.props.isOpen}>
          <ModalHeader onClick={this.props.close}>
            <div className='h3 mb-0'>Edit Your Reservation</div>
          </ModalHeader>
          <Form onSubmit={this.handleSubmit}>
            <ModalBody>
              <FormGroup>
                <Label>Guests</Label>
                <Input type='select' name='guests' defaultValue={this.props.reservation.reservation.guests}>
                  {this.renderOptions(this.props.campsite.maxPeople).map(option =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Vehicles</Label>
                <Input type='select' name='vehicles' defaultValue={this.props.reservation.reservation.vehicles}>
                  {this.renderOptions(this.props.campsite.maxVehicles).map(option =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </Input>
              </FormGroup>
              <Label>Dates</Label>
              <FormGroup>
                <DateRangeComponent />
                <div className={this.state.formInvalid ? 'text-danger mt-2' : 'mt-2 hidden'}>Please enter a date range.</div>
              </FormGroup>
            </ModalBody>
            <ModalFooter className='py-2'>
              <Button onClick={this.props.close} className='shadow float-right mr-2' color='danger'>Cancel</Button>
              <Button className='shadow float-right' color='primary'>Continue</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    )
  }
}
