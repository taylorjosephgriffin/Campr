import React from 'react'
import { Col,
  FormGroup,
  Input } from 'reactstrap'

export default function GasMileageInputs(props) {
  return (
    <Col xl='6'>
      <legend>{props.label}<h6 className='d-inline'> {props.byline}</h6></legend>
      <FormGroup>
        <Input type={props.type} name={props.name} required/>
      </FormGroup>
    </Col>
  )
}
