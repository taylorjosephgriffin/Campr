import React from 'react'
import parse from './util/query-string.js'
import CampgroundListItem from './campground-list-item.js'

export default class Campgrounds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campgrounds: []
    }
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
      <CampgroundListItem campgrounds={this.state.campgrounds} />
    )
  }
}
