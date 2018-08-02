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
      path: hash.parse(localStorage.getItem('hash')).path,
      params: qs.parse(location.hash.replace(/^(.*?)\?/, ''))
    }
    window.location.hash = localStorage.getItem('hash')
  }

  renderView() {
  switch (this.state.path) {
    case 'details':
      return <CampgroundDetail params={this.state.params} path={this.state.path}/>
    case '':
    case 'campground-list':
    localStorage.setItem('hash', window.location.hash)
      return <Campgrounds params={this.state.params}/>
    case 'campsite':
      return <Campsites />
    case 'checkout':
      return <CheckoutWizard />
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
    console.log(this.state.params)
    return (
      <React.Fragment>
        <Nav path={this.state.path}/>
        { this.renderView() }
      </React.Fragment>
    )
  }
}
