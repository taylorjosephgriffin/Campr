import React from 'react'
import { Card, Col, Row, Container } from 'reactstrap'
import CostBreakdown from './cost-breakdown.js'
import ConfirmReservationInfo from './confirm-reservation-info'
import PaymentInfo from './payment-info.js'
import ConfirmButtons from './confirm-buttons.js'
import PaymentButtons from './payment-buttons'

const cardBody = {
  width: '100%',
  marginTop: '10vh',
  marginBottom: '5vh'
}

export default class Checkout extends React.Component {
  constructor(props) {
    super(props)

    this.renderButtonGroup = this.renderButtonGroup.bind(this)
    this.renderCheckoutView = this.renderCheckoutView.bind(this)
  }

  renderCheckoutView() {
    switch (this.props.view) {
      case 'confirm':
        return <ConfirmReservationInfo reservation={this.props.reservation} />
      case 'payment':
        return <PaymentInfo handleOrderSubmit={this.props.handleOrderSubmit}/>
    }
  }

  renderButtonGroup() {
    switch (this.props.view) {
      case 'confirm':
        return <ConfirmButtons
          confirmView={this.props.confirmView}
          toggleDeleteModal={this.props.toggleDeleteModal}
          toggleEditModal={this.props.toggleEditModal}
          paymentView={this.props.paymentView} />
      case 'payment':
        return <PaymentButtons
          confirmView={this.props.confirmView}
          paymentView={this.props.paymentView}/>
    }
  }

  render() {
    return (
      <div>
        <Container fluid className='mt-5'>
          <Row className='justify-content-center'>
            <Col xl='6' lg='8' className='reservation-page'>
              <Card className='border-secondary' style={cardBody}>
                { this.renderCheckoutView() }
                <CostBreakdown reservation={this.props.reservation} />
                { this.renderButtonGroup() }
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
