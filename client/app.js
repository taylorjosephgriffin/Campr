import React from 'react'
import Campgrounds from './containers/campgrounds.js'
import Nav from './components/nav.js'
import CampgroundDetail from './containers/campground-detail.js'
import hash from './util/hash.js'
import * as qs from 'qs'
import Campsites from './containers/campsites.js'
import CheckoutWizard from './containers/checkout-wizard.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      path: hash.parse(location.hash).path || '',
      params: qs.parse(location.hash.replace(/^(.*?)\?/, ''))
    }
  }

  renderView() {
  switch (this.state.path) {
    case 'details':
      return <CampgroundDetail params={this.state.params} path={this.state.path}/>
    case '':
    case 'campground-list':
      return <Campgrounds params={this.state.params}/>
    case 'campsite':
      return <Campsites />
    case 'checkout':
      return <CheckoutWizard params={this.state.params}/>
  }
}

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({
        path: hash.parse(location.hash).path,
        params: qs.parse(location.hash.replace(/^(.*?)\?/, ''))
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
