import React from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

export default class Filter extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.geocodeAPITest = this.geocodeAPITest.bind(this)
  }

  geocodeAPITest() {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=8363+Palais+Road,+Stanton,+CA&key=AIzaSyBb4CpRDr7IJC-IFKw2kcEh9C0aF1WhjzM')
      .then(res => res.json())
      .then(data => console.log(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng))
  }

  handleSubmit(event) {
    event.preventDefault()
    const filterForm = new FormData(event.target)
    const amenity = filterForm.get('activity').toLowerCase()
    const price = parseInt(filterForm.get('price'), 10)
    const filter = {}

    if (amenity !== 'none') {
      filter.amenities = [amenity]
    }
    if (price !== 'none') {
      filter.maxPrice = price
    }
    this.props.loadCampgrounds(filter)
  }

  render() {
    return (
      <div className='container-fluid mt-5 pt-4'>
        <div className='row justify-content-end'>
          <div className='col-lg-12'>
            <button onClick={this.geocodeAPITest} className='nav-link filter-link bg-transparent text-primary h4 ml-2 mt-2 float-left'>Address</button>
            <button id='Popover2' className='nav-link filter-link bg-transparent border-0 text-primary h4 ml-2 mt-2 float-right' onClick={this.props.toggle}><i className='fas fa-filter'></i></button>
            <Popover className='w-100' placement="bottom" isOpen={this.props.popoverOpen} target="Popover2" toggle={this.props.toggle}>
              <PopoverHeader className='text-center'>Filter Results</PopoverHeader>
              <PopoverBody>
                <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <label>Price</label>
                    <select name='price' className='form-control'>
                      <option>None</option>
                      <option value='45'>less than $45</option>
                      <option value='35'>less than $35</option>
                      <option value='25'>less than $25</option>
                    </select>
                    <label className='mt-2'>Activities</label>
                    <select name='activity' className='form-control'>
                      <option>None</option>
                      <option>Birding</option>
                      <option>Boating</option>
                      <option>Campfire</option>
                      <option>Fishing</option>
                      <option>Hiking</option>
                      <option>Surfing</option>
                      <option>Kayaking</option>
                      <option>Swimming</option>
                      <option>Boldering</option>
                      <option>Rock Climbing</option>
                    </select>
                    <Button type='submit' className='btn btn-secondary filter-button mt-4'>Refine Search</Button>
                  </div>
                </form>
              </PopoverBody>
            </Popover>
          </div>
        </div>
      </div>
    )
  }
}
