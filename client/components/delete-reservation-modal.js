import React from 'react'
import { Button,
  Modal,
  ModalBody,
  Row,
  Col,
  ModalFooter } from 'reactstrap'

const deleteWarning = {
  fontSize: '150px'
}

export default function DeleteReservationModal(props) {
  return (
    <div>
      <Modal centered isOpen={props.isOpen}>
        <ModalBody>
          <Row>
            <Col xl='12' className='text-center'>
              <span className='h3 m-auto'>Are you sure?</span>
            </Col>
          </Row>
          <Row>
            <Col xl='12' className='text-center'>
              <div style={deleteWarning}><i className='fas fa-trash text-danger'></i></div>
            </Col>
          </Row>
          <Row>
            <Col xl='12' className='text-center'>
              <span>Reservations cannot be retrieved once they are deleted.</span>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className='py-2'>
          <Button onClick={props.close} className='shadow float-right mr-2' color='info'>Cancel</Button>
          <Button onClick={props.deleteReservation} className='shadow float-right' color='danger'>Delete</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
