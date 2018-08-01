import React from 'react'
import Campgrounds from './campgrounds.js'
import Nav from './nav.js'
import CampgroundDetail from './campground-detail.js'
import hash from './util/hash.js'
import Campsites from './campsites.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      path: hash.parse(localStorage.getItem('hash')).path
    }
    window.location.hash = localStorage.getItem('hash')
    localStorage.setItem('hash', window.location.hash)
  }

  renderView() {
  switch (this.state.path) {
    case 'details':
      return <CampgroundDetail path={this.state.path}/>
    case '':
    case 'campground-list':
      return <Campgrounds />
    case 'campsite':
      return <Campsites />
  }
}

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({
        path: hash.parse(location.hash).path
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        { this.renderView() }
      </React.Fragment>
    )
  }
}
