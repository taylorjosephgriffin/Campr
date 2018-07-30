import React, { Fragment } from 'react'
import * as qs from 'qs'
import Service from './service.js'
import CampsiteListItems from './campsite-list-items.js'

export default class CampsitesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campsites: []
    }
  }

  componentDidMount() {
    const idQuery = location.hash.replace(/^(.*?)\?/, '')
    const id = qs.parse(idQuery).id
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
    return (
      <CampsiteListItems campground={this.state.campground} campsites={this.state.campsites}/>
    )
  }
}
