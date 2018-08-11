import React from 'react'
import { Button, Row } from 'reactstrap'

export default function ConfirmButtons(props) {

  return (
    <Row className='justify-content-end my-2'>
      <a href='#campground-list'>
        <Button color='dark' className='shadow mr-2'>Home</Button>
      </a>
      <Button onClick={props.toggleDeleteModal} color='danger' className='shadow mr-2'>Delete</Button>
      <Button onClick={props.toggleEditModal} color='info' className='shadow mr-2'>Edit</Button>
      <Button onClick={props.paymentView} color='success' className='shadow mr-4'>Continue</Button>
    </Row>
  )
}
