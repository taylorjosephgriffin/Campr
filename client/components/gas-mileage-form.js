import React from 'react'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap'
import GasMileageInfo from './gas-mileage-info.js'

export default function GasMileageForm(props) {
  return (
    <Form className='mt-3 p-2 text-dark' onSubmit={props.handleMileageSubmit}>
      <legend className='text-center'>Choose your type of vehicle.</legend>
      <Row className='text-center'>
        <Col xl='4'>
          <FormGroup className='px-5'>
            <Label check>
              <Input
                className='hidden'
                id='car-radio'
                type='radio'
                name='type'
                value='car'
                required/>
              <img className='w-100' src='assets/car-icon.png' />
              Car
            </Label>
          </FormGroup>
        </Col>
        <Col xl='4'>
          <FormGroup className='px-5'>
            <Label check>
              <Input
                id='truck-radio'
                type='radio'
                name='type'
                value='truck'
                required/>
              <img className='w-100' src='assets/truck-icon.png' />
              Truck
            </Label>
          </FormGroup>
        </Col>
        <Col xl='4'>
          <FormGroup className='px-5'>
            <Label check>
              <Input
                id='van-radio'
                type='radio'
                name='type'
                value='van'
                required/>
              <img className='w-100' src='assets/van-icon.png' />
              Van
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xl='6'>
          <legend>Vehicle <h6 className='d-inline'>year, make, model</h6></legend>
          <FormGroup>
            <Input type='text' name='vehicleInfo' required/>
          </FormGroup>
        </Col>
        <Col xl='6'>
          <legend>Distance <h6 className='d-inline'>in Miles</h6></legend>
          <FormGroup>
            <Input type='number' name='distance' required/>
          </FormGroup>
        </Col>
        <Col xl='6'>
          <legend>Fuel Efficiency <h6 className='d-inline'>in MPG</h6></legend>
          <FormGroup>
            <Input type='number' name='mileage' required/>
          </FormGroup>
        </Col>
        <Col xl='6'>
          <legend>Fuel Price <h6 className='d-inline'>per Gallon</h6></legend>
          <FormGroup>
            <Input type='input' name='price' required/>
          </FormGroup>
        </Col>
      </Row>
      <GasMileageInfo tripInfo={props.tripInfo} />
      <Row className='justify-content-center'>
        <Button type='submit'>Calculate</Button>
      </Row>
    </Form>
  )
}
