import React, { Fragment } from 'react'
import queryString from './util/query-string.js'
import hash from './util/hash.js'
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
    this.filterData = this.filterData.bind(this)
  }

  loadCampgrounds(filter) {
    fetch('/campgrounds' + queryString.stringify(filter))
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

  filterData(event) {
    event.preventDefault()
    const filterForm = new FormData(event.target)
    const amenity = filterForm.get('activity').toLowerCase()
    const price = filterForm.get('price')
    const pet = filterForm.get('pets')
    let amenityFilter = {}

    if (amenity === 'none') amenityFilter = {}
    else {
      amenityFilter[amenity] = true
    }

    this.loadCampgrounds(amenityFilter)

  }

  render() {
    return (
      <Fragment>
        <Filter filterData={this.filterData} toggle={this.toggle} campgrounds={this.state.campgrounds} popoverOpen={this.state.popoverOpen} />
        <CampgroundListItem campgrounds={this.state.campgrounds} />
      </Fragment>
    )
  }
}
