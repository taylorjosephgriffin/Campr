import React, { Fragment } from 'react'
import parse from './util/query-string.js'
import CampgroundListItem from './campground-list-item.js'
import Filter from './filter-campgrounds.js'

export default class Campgrounds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      campgrounds: [],
      filteredCampgrounds: [],
      popoverOpen: false
    }
    this.toggle = this.toggle.bind(this)
    this.filterData = this.filterData.bind(this)
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

  filterData(event) {
    event.preventDefault()
    const filterForm = new FormData(event.target)
    const amenity = filterForm.get('activity')
    const price = filterForm.get('price')
    const pet = filterForm.get('pets')
  }

  render() {
    console.log(this.state.filteredCampgrounds)
    return (
      <Fragment>
        <Filter filter={this.state.filteredCampgrounds} filterData={this.filterData} toggle={this.toggle} campgrounds={this.state.campgrounds} popoverOpen={this.state.popoverOpen} />
        <CampgroundListItem campgrounds={this.state.campgrounds} />
      </Fragment>
    )
  }
}
