import React from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

export default function Filter(props) {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-end'>
        <div className='col-lg-6'>
          <button id='Popover1' className='nav-link filter-link bg-transparent border-0 text-primary h4 ml-2 mt-2 float-right' onClick={props.toggle}><i className='fas fa-filter'></i></button>
          <Popover className='w-100' placement="bottom" isOpen={props.popoverOpen} target="Popover1" toggle={props.toggle}>
            <PopoverHeader className='text-center'>Filter Results</PopoverHeader>
            <PopoverBody>
              <form onSubmit={props.filterData}>
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
                  <div className='form-check mt-3 ml-1 mb-3'>
                    <input name='pets' type='checkbox' className='form-check-input' />
                    <div className='form-check-label h6'>Allows pets</div>
                  </div>
                  <button type='submit' className='btn btn-secondary filter-button mt-2'>Refine Search</button>
                </div>
              </form>
            </PopoverBody>
          </Popover>
        </div>
      </div>
    </div>
  )
}
