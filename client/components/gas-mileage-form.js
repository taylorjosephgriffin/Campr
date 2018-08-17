import React from 'react'
import { Row, Form, Button } from 'reactstrap'
import GasMileageInfo from './gas-mileage-info.js'
import GasMileageRadios from './gas-mileage-radios.js'
import GasMileageInputs from './gas-mileage-inputs.js'

export default function GasMileageForm(props) {
  return (
    <Form className='mt-3 p-2 text-dark' onSubmit={props.handleMileageSubmit}>
      <legend className='text-center'>Choose your type of vehicle.</legend>
      <Row className='text-center'>
        <GasMileageRadios label='Car' value='car' icon='./assets/car-icon.png' />
        <GasMileageRadios label='Truck' value='truck' icon='./assets/truck-icon.png' />
        <GasMileageRadios label='Van' value='van' icon='./assets/van-icon.png' />
      </Row>
      <Row>
        <GasMileageInputs
          label='Vehicle'
          byline='year, make, model'
          type='text'
          name='vehicleInfo' />
        <GasMileageInputs
          label='Distance'
          byline='in Miles'
          type='number'
          name='distance' />
        <GasMileageInputs
          label='Fuel Efficiency'
          byline='in MPG'
          type='number'
          name='mileage' />
        <GasMileageInputs
          label='Fuel Price'
          byline='per Gallon'
          type='input'
          name='price' />
      </Row>
      <GasMileageInfo tripInfo={props.tripInfo} />
      <Row className='justify-content-center'>
        <Button type='submit'>Calculate</Button>
      </Row>
    </Form>
  )
}
