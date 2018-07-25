import React from 'react'

export default function Campgrounds(props) {

  return (
    <nav className='navbar navbar-expand-lg bg-primary main-nav p-0'>
      <a className='navbar-brand ml-xl-4 ml-2 text-light' href='#campground-list'>
        <span className='nav-logos'>
          <i className='fas fa-fire logo-icon'></i>
          <span className='logo-name pl-2'>Campr</span>
        </span>
      </a>
      <ul className='navbar-nav ml-auto mr-4'>
        <li className='nav-item active'>
          <a className='nav-link home-link text-white' href='#campground-list'>Home</a>
        </li>
      </ul>
    </nav>
  )
}
