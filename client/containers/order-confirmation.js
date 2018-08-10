import React from 'react'
import ConfirmationPage from '../components/confirmation-page.js'

export default class OrderConfirmation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentOrder: null
    }
    this.refreshCurrentOrder = this.refreshCurrentOrder.bind(this)
  }

  componentDidMount() {
    this.refreshCurrentOrder()
  }

  refreshCurrentOrder() {
    fetch('/orders/' + this.props.params.orderId)
      .then(res => res.json())
      .then(order => {
        this.setState({
          currentOrder: order
        })
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params !== this.props.params) {
      this.refreshCurrentOrder()
    }
  }

  render() {
    return (
      this.state.currentOrder
        ? <ConfirmationPage order={this.state.currentOrder} />
        : null
    )
  }
}
