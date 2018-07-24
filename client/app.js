import React from 'react'
import Campgrounds from './campgrounds.js'
import Nav from './nav.js'
import CampgroundDetail from './campground-detail.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campgrounds: [
      ],
      detail: '',
      path: window.location.hash.replace(/#/g, '')
    }
    this.handleCampgroundClick = this.handleCampgroundClick.bind(this)
  }

  handleCampgroundClick(event) {
    window.location.hash = 'details'
    this.setState({
      path: 'details'
    })
    const campground = this.state.campgrounds.filter(camp => {
      return event.currentTarget.dataset.id === camp.id
    })
    this.setState({
      detail: campground[0]
    })
  }

  componentDidMount() {
    fetch('/campgrounds')
      .then(res => res.json())
      .then(campgrounds => {
        this.setState({
          campgrounds: campgrounds
        })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Campgrounds handleCampgroundClick={this.handleCampgroundClick} campgrounds={this.state.campgrounds}/>
      </React.Fragment>
    )
  }
}
