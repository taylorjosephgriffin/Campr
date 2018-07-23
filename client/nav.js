import React from 'react'

export default function Campgrounds(props) {

  return (
    <nav className='navbar navbar-light bg-primary p-0'>
      <a className='navbar-brand ml-4 text-light' href='campground-list'>
        <span className='nav-logos'>
          <i className='fas fa-fire logo-icon'></i>
          <span className='logo-name pl-2'>Campr</span>
        </span>
      </a>
    </nav>
  )
}
