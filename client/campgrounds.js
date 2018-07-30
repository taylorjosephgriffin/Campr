import React, { Fragment } from 'react'
import queryString from './util/query-string.js'
import hash from './util/hash.js'
import CampgroundListItem from './campground-list-item.js'
import Filter from './filter-campgrounds.js'
const qs = require('qs')

export default class Campgrounds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campgrounds: [],
      popoverOpen: false
    }
    this.toggle = this.toggle.bind(this)
    this.loadCampgrounds = this.loadCampgrounds.bind(this)
  }

  loadCampgrounds(filter) {
    fetch('/campgrounds?' + qs.stringify(filter))
      .then(res => res.json())
      .then(data => {
        this.setState({
          campgrounds: data,
          popoverOpen: false
        })
      })
  }

  componentDidMount() {
    this.loadCampgrounds({})
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <Fragment>
        <Filter loadCampgrounds={this.loadCampgrounds} toggle={this.toggle} campgrounds={this.state.campgrounds} popoverOpen={this.state.popoverOpen} />
        <CampgroundListItem campgrounds={this.state.campgrounds} />
      </Fragment>
    )
  }
}
