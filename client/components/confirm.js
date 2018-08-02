import React from 'react'
import { Card, Button, CardHeader, Col, Row, Container } from 'reactstrap'
import RenderPrice from './render-price.js'
import RenderDetails from './render-details.js'

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
      <Container fluid className='mt-5'>
        <Row className='justify-content-center'>
          <Col xl='6' lg='8' className='reservation-page'>
            <Card className='border-secondary' style={cardBody}>
              <CardHeader className='card-header'>
                <Row className='row reservation-page'>
                  <Col xl='6' lg='6' sm='6'>
                    <Row>
                      <RenderDetails label={'Park:'} data={props.reservation.campground.facilityName} style={headerMargin} xlSize={'12'} smSize={''} xsSize={''} />
                      <RenderDetails label={'Site:'} data={props.reservation.campsite.siteNumber} style={headerMargin} xlSize={'12'} smSize={''} xsSize={''} />
                      <RenderDetails label={'Guests:'} data={props.reservation.reservation.guests} style={headerMargin} xlSize={'6'} smSize={'6'} xsSize={'6'} />
                      <RenderDetails label={'Vehicles:'} data={props.reservation.reservation.vehicles} style={headerMargin} xlSize={'6'} smSize={'6'} xsSize={'6'} />
                      <RenderDetails label={'Site Type:'} data={props.reservation.campsite.siteType} style={headerMargin} xlSize={'12'} smSize={''} xsSize={''} />
                      <RenderDetails label={'Arriving:'} data={props.reservation.reservation.startDate} style={headerMargin} xlSize={'6'} smSize={'6'} xsSize={'6'} />
                      <RenderDetails label={'Leaving:'} data={props.reservation.reservation.endDate} style={headerMargin} xlSize={'6'} smSize={'6'} xsSize={'6'} />
                    </Row>
                  </Col>
                  <Col className='reservation-image' xl='6' lg='6' md='6' sm='6'>
                    <div style={cardImage}></div>
                  </Col>
                </Row>
              </CardHeader>
              <CardHeader className='text-secondary bg-white'>
                <Row>
                  <RenderPrice label={`$${props.reservation.campground.price}.00 X ${nights} nights`} data={`$${siteCost}.00`} style={headerMargin} size={'6'}/>
                  <RenderPrice label={'Service Fee:'} data={`$${serviceFee}.00`} style={headerMargin} size={'6'}/>
                  <RenderPrice label={'Tax (8%):'} data={`$${parseFloat(tax).toFixed(2)}`} style={headerMargin} size={'6'}/>
                  <RenderPrice label={'Total:'} data={`$${parseFloat(total).toFixed(2)}`} style={headerMargin} size={'6'} className={'text-success'}/>
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
