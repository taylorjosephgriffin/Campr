import React from 'react'
import { Row, Col } from 'reactstrap'

const totalStyle = {
  fontSize: '80px'
}

export default function GasMileageInfo(props) {
  return (
    <div>
      <Row className='my-4'>
        { !props.tripInfo.total
          ? <Col xl='12'>
            <h4 className='text-center text-success'>
              Enter trip info to calculate total.
            </h4>
          </Col>
          : <Col>
            <h1>Total Trip Cost:
              <span className='d-block text-success text-center' style={totalStyle}>
                ${props.tripInfo.total}
              </span>
            </h1>
          </Col> }
      </Row>
    </div>
  )
}
