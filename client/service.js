import React from 'react'

export default function Service(props) {

  props.boolean
    ? <i className='far fa-check-circle text-success d-block'></i>
    : <i className='far fa-times-circle text-danger d-block'></i>


  return (
    <div className='col-xl-6 col-6 mt-3 pl-0'>
      <h5>
        { props.boolean
          ? <i className='far fa-check-circle text-success'></i>
          : <i className='far fa-times-circle text-danger'></i> }
          &nbsp;
        { props.service }
      </h5>
    </div>
  )
}
