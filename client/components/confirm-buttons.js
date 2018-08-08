import React from 'react'
import { Button, Row } from 'reactstrap'

export default function ConfirmButtons(props) {

  return (
    <Row className='justify-content-end my-2'>
      <a href='#campground-list'>
        <Button color='info' className='shadow float-right mr-2'>Home</Button>
      </a>
      <Button onClick={props.toggleDeleteModal} color='danger' className='shadow float-right mr-2'>Delete</Button>
      <Button onClick={props.toggleEditModal} color='success' className='shadow float-right mr-2'>Edit</Button>
      <Button onClick={props.paymentView} color='info' className='shadow float-right mr-4'>Continue</Button>
    </Row>
  )
}
