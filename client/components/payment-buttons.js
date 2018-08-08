import React from 'react'
import { Button, Row } from 'reactstrap'

export default function PaymentButtons(props) {

  return (
    <Row className='justify-content-end my-2'>
      <Button onClick={props.confirmView} color='info' className='shadow float-right mr-2'>Back</Button>
      <Button onClick={props.paymentView} color='success' className='shadow float-right mr-4'>Confirm & Pay</Button>
    </Row>
  )
}
