import React from 'react'
import { PopoverHeader,
  PopoverBody,
  Row,
  Col } from 'reactstrap'

export default function CartPopover(props) {
  return (
    <React.Fragment>
      <PopoverHeader className='text-center'>Pending Reservations</PopoverHeader>
      <PopoverBody className='p-0'>
        { props.reservations && props.reservations.length !== 0
          ? props.reservations.map((reservation, index) =>
            <a href={`#checkout?reservationId=${reservation.reservationId}`} onClick={props.toggle} key={index}>
              <PopoverBody className='reservation-popover rounded'>
                <Row>
                  <Col xl='12' lg='12'>
                    <div>{reservation.campsite.loop}</div>
                    <div>{`${reservation.reservation.startDate} - ${reservation.reservation.endDate}`}</div>
                    <div>{`Guests: ${reservation.reservation.guests}`}</div>
                  </Col>
                </Row>
              </PopoverBody>
            </a>
          )
          : <div className='text-center my-3'>You have no pending reservations.</div>}
      </PopoverBody>
      <PopoverHeader className='text-center'>Past Orders</PopoverHeader>
      <PopoverBody className='p-0'>
        { props.orders && props.orders.length !== 0
          ? props.orders.map((order, index) =>
            <a href={`#confirmation?orderId=${order.orderId}`} onClick={props.toggle} key={index}>
              <PopoverBody className='reservation-popover rounded'>
                <Row>
                  <Col xl='12' lg='12'>
                    <div>{order.park}</div>
                    <div>{`${order.startDate} - ${order.endDate}`}</div>
                    <div>{`Guests: ${order.guests}`}</div>
                  </Col>
                </Row>
              </PopoverBody>
            </a>
          )
          : <div className='text-center my-3'>You have no past orders.</div>}
      </PopoverBody>
    </React.Fragment>
  )
}
