import React, { Fragment } from 'react'
import * as qs from 'qs'
import CampgroundList from '../components/campground-list.js'
import Filter from '../components/filter-campgrounds.js'

export default class Campgrounds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campgrounds: [],
      showFilters: false
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
          showFilters: false
        })
      })
  }

  componentDidMount() {
    fetch('/campgrounds/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          campgrounds: data,
          showFilters: false
        })
      })
  }

  toggle() {
    this.setState({
      showFilters: !this.state.showFilters
    })
  }

  render() {
    return (
      <Fragment>
        <Filter loadCampgrounds={this.loadCampgrounds} toggle={this.toggle} campgrounds={this.state.campgrounds} popoverOpen={this.state.showFilters} />
        <CampgroundList campgrounds={this.state.campgrounds} />
      </Fragment>
    )
  }
}
