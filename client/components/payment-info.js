import React from 'react'
import { CardHeader, Col, Row, Form, Label, Input, FormGroup } from 'reactstrap'

export default function PaymentInfo(props) {

  return (
    <CardHeader className='bg-white text-dark'>
      <Row className='payment-form'>
        <Col xl='12' lg='12' md='12' sm='12' xs='12'>
          <Form id='order-form' onSubmit={props.handleOrderSubmit}>
            <Row>
              <Col xl='12' lg='12' md='12' sm='12' xs='12' className='mt-1'>
                <FormGroup>
                  <Label>Email Address</Label>
                  <Input type='email' name='email' placeholder='johnsmith@example.com' />
                </FormGroup>
              </Col>
              <Col xl='6' lg='6' md='6' sm='6' className='mt-2'>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input required type='text' name='firstName' placeholder='Enter your first name' />
                </FormGroup>
              </Col>
              <Col xl='6' lg='6' md='6' sm='6' className='mt-2'>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input required type='text' name='lastName' placeholder='Enter your last name' />
                </FormGroup>
              </Col>
              <Col xl='12' className='mt-2'>
                <FormGroup>
                  <Label>Billing Address</Label>
                  <Input required type='text' name='address' placeholder='Enter your billing address' />
                </FormGroup>
              </Col>
              <Col xl='8' lg='8' md='8' sm='8' xs='12' className='mt-2'>
                <FormGroup>
                  <Label>Credit Card</Label>
                  <Input required type='text' name='creditCard' placeholder='Enter your card number' />
                </FormGroup>
              </Col>
              <Col xl='2' lg='2' md='2' sm='2' xs='6' className='mt-2'>
                <FormGroup>
                  <Label>Exp</Label>
                  <Input required type='text' name='expiration' placeholder='xx/xx' />
                </FormGroup>
              </Col>
              <Col xl='2' lg='2' md='2' sm='2' xs='6' className='mt-2'>
                <FormGroup>
                  <Label>Cvv</Label>
                  <Input required type='text' name='cvv' placeholder='xxx' />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </CardHeader>
  )
}
