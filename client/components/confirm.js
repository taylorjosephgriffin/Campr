import React from 'react'
import { Card, Button, CardHeader, CardText, CardBody, CardTitle, Col, Row, Container, Label } from 'reactstrap';

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

const cardBody = {
  width: '100%',
  marginTop: '10vh',
  marginBottom: '5vh'
}

const headerMargin = {
  marginTop: '10px'
}

export default function Confirm(props) {

  const cardImage = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${props.reservation.campsite.sitePhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const startDate = new Date(props.reservation.reservation.startDate)
  const endDate = new Date(props.reservation.reservation.endDate)
  const nights = endDate.getDate() - startDate.getDate()
  const siteCost = props.reservation.campground.price * nights
  const serviceFee = 20
  const tax = (siteCost + serviceFee) * 0.08
  const total = siteCost + serviceFee + tax

  return (
    <div>
    <div style={divStyle1}>
      <div style={layer}>
      </div>
        </div>
        <Container fluid className='mt-5'>
          <Row className='justify-content-center'>
            <Col xl='6' lg='8' className='reservation-page'>
              <Card className='border-secondary' style={cardBody}>
              <CardHeader className='card-header'>
                <Row className='row reservation-page'>
                  <Col xl='6' lg='6' sm='6'>
                    <Row>
                      {props.renderDetails('Park:', props.reservation.campground.facilityName, headerMargin, '12')}
                      {props.renderDetails('Site:', props.reservation.campsite.siteNumber, headerMargin, '12')}
                      {props.renderDetails('Guests:', props.reservation.reservation.guests, headerMargin, '6', '6', '6')}
                      {props.renderDetails('Vehicles:', props.reservation.reservation.vehicles, headerMargin, '6', '6', '6')}
                      {props.renderDetails('Site Type:', props.reservation.campsite.siteType, headerMargin, '12')}
                      {props.renderDetails('Arriving:', props.reservation.reservation.startDate, headerMargin, '6', '6', '6')}
                      {props.renderDetails('Leaving:', props.reservation.reservation.endDate, headerMargin, '6', '6', '6')}
                    </Row>
                  </Col>
                  <Col className='reservation-image' xl='6' lg='6' md='6' sm='6'>
                    <div style={cardImage}></div>
                  </Col>
                </Row>
              </CardHeader>
              <CardHeader className='text-secondary bg-white'>
                <Row>
                  {props.renderPrice(`$${props.reservation.campground.price}.00 X ${nights} nights`, `$${siteCost}.00`, headerMargin, '6')}
                  {props.renderPrice('Service Fee:', `$${serviceFee}.00`, headerMargin, '6')}
                  {props.renderPrice('Tax (8%):', `$${parseFloat(tax).toFixed(2)}`, headerMargin, '6')}
                  {props.renderPrice('Total:', `$${parseFloat(total).toFixed(2)}`, headerMargin, '6', 'text-success')}
                </Row>
              </CardHeader>
              <Row className='justify-content-end my-2'>
                <Button color='danger' className='shadow float-right mr-3'>Back</Button>
                <Button color='success' className='shadow float-right mr-4'>Continue</Button>
              </Row>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
  )
}
