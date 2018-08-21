import React from 'react'
import {
  PopoverHeader,
  PopoverBody,
  Row,
  Col } from 'reactstrap'

export default function FavoritesPopover(props) {
  return (
    <React.Fragment>
      <PopoverHeader className='text-center'>Favorites</PopoverHeader>
      <PopoverBody className='p-0'>
        { props.favorites && props.favorites.length !== 0
          ? props.favorites.map((favorite, index) =>
            <a href={`#details?id=${favorite.id}`} onClick={props.toggle} key={index}>
              <PopoverBody className='reservation-popover rounded w-100'>
                <Row>
                  <Col xl='12' lg='12'>
                    <h5 className='text-center'>{favorite.facilityName}</h5>
                  </Col>
                  <Col xl='12' lg='12'>
                    <img className='w-100' src={favorite.facilityPhotos[0]} />
                  </Col>
                </Row>
              </PopoverBody>
            </a>
          )
          : <div className='text-center my-3'>You have no pending reservations.</div>}
      </PopoverBody>
    </React.Fragment>
  )
}
