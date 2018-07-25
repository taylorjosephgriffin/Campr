import React from 'react'
import Campgrounds from './campgrounds.js'
import Nav from './nav.js'
import CampgroundDetail from './campground-detail.js'
import hash from './util/hash.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      path: hash.parse(location.hash).path
    }
  }

  renderView() {
  switch (this.state.path) {
    case 'details':
      return <CampgroundDetail />
    case 'campground-list':
      return <Campgrounds />
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
        { this.renderView()}
      </React.Fragment>
    )
  }
}
