import React from 'react'
import { Card, Container, CardHeader, Button, CardFooter, Col, Row, Label } from 'reactstrap'

const cardBody = {
  width: '100%',
  marginTop: '10vh',
  marginBottom: '5vh'
}

export default function ConfirmationPage(props) {

  return (
    <Container fluid className='mt-5'>
      <Row className='justify-content-center'>
        <Col xl='6' lg='8' md='8' className='reservation-page'>
          <Card className='border-secondary' style={cardBody}>
            <Row className='payment-form'>
              <Col xl='12' lg='12' md='12' sm='12' xs='12'>
                <CardHeader className='bg-white'>
                  <Row className='justify-content-center'>
                    <Col xl='12' lg='12' md='12' sm='12' xs='12' className='mt-3'>
                      <div className='text-center h2'>Thank you for your resevation!</div>
                    </Col>
                    <Col xl='12' lg='12' md='12' sm='12' xs='12' className='mt-3'>
                      <div className='text-center h5'>Please retain this information for your records.</div>
                    </Col>
                    <Col xl='12' lg='12' md='12' sm='12' xs='12' className='mt-3'>
                      <div className='text-center h5'>You should recieve a confirmation via email shortly.</div>
                    </Col>
                    <Col xl='12' lg='12' md='12' sm='12' xs='12' className='mt-4'>
                      <Label>Order Number:</Label>
                      <div className='h4'>{props.order.orderId}</div>
                    </Col>
                    <Col xl='12' lg='12' md='12' sm='12' xs='12' className='mt-3'>
                      <Label>Order Date:</Label>
                      <div className='h4'>{props.order.orderDate}</div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardHeader>
                  <Row>
                    <Col xl='6' lg='6' md='6' sm='6' xs='12' className='mt-2'>
                      <div className='h5'>Park: {props.order.park}</div>
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='6' xs='12' className='mt-2'>
                      <div className='h5'>Site: {props.order.site}</div>
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='6' xs='6' className='mt-2'>
                      <div className='h5'>Guests: {props.order.guests}</div>
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='6' xs='6' className='mt-2'>
                      <div className='h5'>Vehicles: {props.order.vehicles}</div>
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='6' xs='12' className='mt-2'>
                      <div className='h5'>Arriving: {props.order.startDate}</div>
                    </Col>
                    <Col xl='6' lg='6' md='6' sm='6' xs='12' className='mt-2'>
                      <div className='h5'>Leaving: {props.order.endDate}</div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardFooter className='bg-white'>
                  <Row className='justify-content-center'>
                    <a href='#campground-list'>
                      <Button color='dark' className='shadow'>Home</Button>
                    </a>
                  </Row>
                </CardFooter>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
