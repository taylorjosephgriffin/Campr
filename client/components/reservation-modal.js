import React from 'react'
import { Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
  Badge,
  Form,
  FormGroup,
  Label,
  Input,
  FormText } from 'reactstrap'
import DateRangeComponent from './date-range-picker.js'
import * as qs from 'qs'
import uuid from 'uuid/v4'

export default class CreateReservationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: true,
      formValid: null
    }
    localStorage.setItem('hash', `#campsite?facilityNum=${this.props.campground.facilityNum}&id=${this.props.campground.id}`)
    this.toggle = this.toggle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggle() {
    this.setState({
      modal: false
    })
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
      const siteIdQuery = location.hash.replace(/^(.*?)\?/, '')
      return site.siteId === qs.parse(siteIdQuery).siteId
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

    if (!startDate.value || !endDate.value) {
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
      const siteIdQuery = location.hash.replace(/^(.*?)\?/, '')
      return site.siteId === qs.parse(siteIdQuery).siteId
    })
    return (
      <div>
        <Modal centered isOpen={this.props.modalClicked} className={this.props.className}>
          <ModalHeader onClick={this.props.renderModal} toggle={this.toggle}>
            <Container>
              <Row>
                <Col xl='6'>
                  <h3 className='text-dark text-center'>{clickedSite.length === 0 ? null : clickedSite[0].loop}</h3>
                  <Badge color='secondary mt-2'><h6 className='mb-0 text-white'>{clickedSite.length === 0 ? null : `site #${clickedSite[0].siteNumber}`}</h6></Badge>
                </Col>
                <Col xl='6'>
                  <div>
                    <img className='modal-image' src={clickedSite.length === 0 ? null : clickedSite[0].sitePhoto} />
                  </div>
                </Col>
              </Row>
            </Container>
          </ModalHeader>
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
                <Button className='shadow float-right mr-3' color='secondary' onClick={this.toggle, this.props.renderModal}>Cancel</Button>
              </a>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
