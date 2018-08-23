import React from 'react'
import { Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col,
  Badge,
  Form,
  FormGroup,
  Label,
  Input } from 'reactstrap'
import DateRangeComponent from './date-range-picker.js'
import uuid from 'uuid/v4'

export default class ReservationModal extends React.Component {
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
    const clickedSite = this.props.campsites.filter(site => {
      return site.siteId === this.props.params.siteId
    })
    const resData = new FormData(event.target)
    const reservationObj = {
      reservationId: uuid(),
      campground: this.props.campground,
      campsite: clickedSite[0],
      reservation: {
        guests: resData.get('guests'),
        vehicles: resData.get('vehicles'),
        startDate: resData.get('startDate'),
        endDate: resData.get('endDate')
      }
    }

    if (!reservationObj.reservation.startDate || !reservationObj.reservation.endDate) {
      this.setState({
        formValid: true
      })
    }
    else {
      this.props.createReservation(reservationObj)
    }
  }

  render() {
    const clickedSite = this.props.campsites.filter(site => {
      return site.siteId === this.props.params.siteId
    })
    return (
      <div>
        <Modal centered isOpen={this.props.isOpen} className={this.props.className}>
          <a href={`#campsite?facilityNum=${this.props.campground.facilityNum}&id=${this.props.campground.id}`}>
            <ModalHeader onClick={this.props.close}>
              <Container>
                <Row>
                  <Col xl='6'>
                    <h3 className='text-dark text-center'>{clickedSite.length !== 0 && clickedSite[0].loop}</h3>
                    <Badge color='secondary my-2'><h6 className='mb-0 text-white'>{clickedSite.length !== 0 ? `site #${clickedSite[0].siteNumber}` : null}</h6></Badge>
                  </Col>
                  <Col xl='6'>
                    <div>
                      <img className='w-100' src={clickedSite.length !== 0 ? clickedSite[0].sitePhoto : null} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </ModalHeader>
          </a>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label>Guests</Label>
                <Input type='select' name='guests'>
                  {this.renderOptions(this.props.campsites[0].maxPeople).map(option =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Vehicles</Label>
                <Input type='select' name='vehicles'>
                  {this.renderOptions(this.props.campsites[0].maxVehicles).map(option =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </Input>
              </FormGroup>
              <Label>Dates</Label>
              <FormGroup>
                <DateRangeComponent />
                <div className={this.state.formValid ? 'text-danger mt-2' : 'mt-2 hidden'}>Please enter a date range.</div>
              </FormGroup>
              <Button className='shadow float-right' color='primary'>Continue</Button>
              <a href={`#campsite?facilityNum=${this.props.campground.facilityNum}&id=${this.props.campground.id}`}>
                <Button className='shadow float-right mr-3' color='secondary' onClick={this.props.close}>Cancel</Button>
              </a>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
