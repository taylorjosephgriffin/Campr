import React from 'react'
import ConfirmationPage from '../components/confirmation-page.js'

export default class OrderConfirmation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentOrder: null
    }
  }

  componentDidMount() {
    fetch('/orders/' + this.props.params.orderId)
      .then(res => res.json())
      .then(order => {
        this.setState({
          currentOrder: order
        })
      })
  }

  render() {
    return (
      this.state.currentOrder
        ? <ConfirmationPage order={this.state.currentOrder} />
        : null
    )
  }
}
