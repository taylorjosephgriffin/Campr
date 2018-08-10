import React from 'react'
import Campgrounds from './containers/campgrounds.js'
import Nav from './components/nav.js'
import CampgroundDetail from './containers/campground-detail.js'
import hash from './util/hash.js'
import Campsites from './containers/campsites.js'
import CheckoutWizard from './containers/checkout-wizard.js'
import OrderConfirmation from './containers/order-confirmation.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    const { path, params } = hash.parse(location.hash)

    this.state = {
      path: path,
      params: params
    }
  }

  renderView() {
    switch (this.state.path) {
      case 'details':
        return <CampgroundDetail params={this.state.params}/>
      case '':
      case 'campground-list':
        return <Campgrounds params={this.state.params}/>
      case 'campsite':
        return <Campsites params={this.state.params}/>
      case 'checkout':
        return <CheckoutWizard params={this.state.params}/>
      case 'confirmation':
        return <OrderConfirmation params={this.state.params}/>
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const { path, params } = hash.parse(location.hash)
      this.setState({
        path: path,
        params: params
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Nav path={this.state.path}/>
        { this.renderView() }
      </React.Fragment>
    )
  }
}
