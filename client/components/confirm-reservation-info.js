import React from 'react'
import { CardHeader, Col, Row } from 'reactstrap'
import RenderDetails from './render-details.js'

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

  return (
    <CardHeader className='card-header bg-white text-dark'>
      <Row className='row reservation-page'>
        <Col xl='6' lg='6' sm='6'>
          <Row>
            <RenderDetails label={'Park:'} data={props.reservation.campground.facilityName} style={headerMargin} xlSize={'12'} smSize={'12'} xsSize={'12'} />
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
  )
}
