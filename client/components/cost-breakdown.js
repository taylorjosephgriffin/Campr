import React from 'react'
import { CardHeader, Row } from 'reactstrap'
import RenderPrice from './render-price.js'

const headerMargin = {
  marginTop: '10px'
}

export default function CostBreakdown(props) {

  const startDate = new Date(props.reservation.reservation.startDate)
  const endDate = new Date(props.reservation.reservation.endDate)
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime())
  const nights = Math.ceil(timeDiff / (1000 * 3600 * 24))
  const siteCost = props.reservation.campground.price * nights
  const serviceFee = 20
  const tax = (siteCost + serviceFee) * 0.08
  const total = siteCost + serviceFee + tax

  return (
    <CardHeader className='text-secondary bg-white'>
      <Row>
        <RenderPrice label={`$${props.reservation.campground.price}.00 X ${nights} nights`} data={`$${siteCost}.00`} style={headerMargin} size={'6'}/>
        <RenderPrice label={'Service Fee:'} data={`$${serviceFee}.00`} style={headerMargin} size={'6'}/>
        <RenderPrice label={'Tax (8%):'} data={`$${parseFloat(tax).toFixed(2)}`} style={headerMargin} size={'6'}/>
        <RenderPrice label={'Total:'} data={`$${parseFloat(total).toFixed(2)}`} style={headerMargin} size={'6'} className={'text-success'}/>
      </Row>
    </CardHeader>
  )
}
