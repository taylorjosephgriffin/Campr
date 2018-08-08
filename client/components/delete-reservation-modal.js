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

export default class DeleteReservationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Modal centered isOpen={this.props.isOpen}>
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
            <Button onClick={this.props.close} className='shadow float-right mr-2' color='info'>Cancel</Button>
            <Button className='shadow float-right' color='danger'>Delete</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
