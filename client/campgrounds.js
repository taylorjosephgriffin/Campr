import React, { Fragment } from 'react'
import parse from './util/query-string.js'
import CampgroundListItem from './campground-list-item.js'
import Filter from './filter-campgrounds.js'

export default class Campgrounds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campgrounds: [],
      popoverOpen: false
    }
    this.toggle = this.toggle.bind(this)
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

  toggle() {
  this.setState({
    popoverOpen: !this.state.popoverOpen
  });
}

  render() {
    return (
      <Fragment>
        <Filter toggle={this.toggle} campgrounds={this.state.campgrounds} popoverOpen={this.state.popoverOpen} />
        <CampgroundListItem campgrounds={this.state.campgrounds} />
      </Fragment>
    )
  }
}
