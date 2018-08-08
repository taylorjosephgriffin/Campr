import React from 'react'
import { Card, Button, Col, Row, Container } from 'reactstrap'
import CostBreakdown from './cost-breakdown.js'
import ConfirmReservationInfo from './confirm-reservation-info'

const cardBody = {
  width: '100%',
  marginTop: '10vh',
  marginBottom: '5vh'
}

export default function Checkout(props) {

  return (
    <div>
      <Container fluid className='mt-5'>
        <Row className='justify-content-center'>
          <Col xl='6' lg='8' className='reservation-page'>
            <Card className='border-secondary' style={cardBody}>
              <ConfirmReservationInfo reservation={props.reservation} />
              <CostBreakdown reservation={props.reservation} />
              <Row className='justify-content-end my-2'>
                <Button onClick={props.toggleDeleteModal} color='danger' className='shadow float-right mr-2'>Delete</Button>
                <Button onClick={props.toggleEditModal} color='success' className='shadow float-right mr-2'>Edit</Button>
                <Button color='info' className='shadow float-right mr-4'>Continue</Button>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
