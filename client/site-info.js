import React from 'react'

export default function SiteInfo(props) {

  return (
    <div className='col-xl-6 col-lg-6 col-6 py-2'>
      <p className='card-text h5'>{props.additionalElement}{props.content}</p>
    </div>
  )
}
