import React, { Fragment } from 'react'
import queryString from './util/query-string.js'
import Service from './service.js'
import CampsiteListItems from './campsite-list-items.js'

export default class CampsitesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    const id = queryString.parse(location.hash).id
    fetch('/campgrounds/' + id)
      .then(res => res.json())
      .then(camp => {
        this.setState({
          campground: camp
        })
    })

    fetch('/campsites')
      .then(res => res.json())
      .then(sites => {
        this.setState({
          campsites: sites
        })
      })
  }

  render() {
    if (!this.state.campsites) return null
    return (
      <CampsiteListItems campground={this.state.campground} campsites={this.state.campsites}/>
    )
  }
}
