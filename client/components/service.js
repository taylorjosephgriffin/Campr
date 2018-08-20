import React from 'react'
import { Col } from 'reactstrap'

export default function Service(props) {

  return (
    <Col xl='6' lg='6' md='6' sm='6' xs='6' className='mt-3'>
      <h5>
        { props.hasService
          ? <i className='far fa-check-circle text-success'></i>
          : <i className='far fa-times-circle text-danger'></i> }
          &nbsp;
        { props.service }
      </h5>
    </Col>
  )
}
