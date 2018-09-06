import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText } from 'reactstrap'
import Rating from 'react-rating'

const campgroundNameStyle = {
  fontSize: '40px',
  fontWeight: '100',
  backgroundColor: 'rgba(122, 194, 173, 0.7)'
}

export default function CampgroundList(props) {

  return (
    <Container fluid>
      <Row>
        { props.campgrounds.map((campground, index) =>
          <Col xl='4' lg='6' key={index} className='mb-3 translate-2 campground'>
            <a className='campground-link' href={`#details?id=${campground.id}`}>
              <Card data-id={campground.id} className='h-100 campground-card shadow'>
                <div
                  className='card-img-top shadow h-100'
                  style={{minHeight: '400px',
                    backgroundImage: `url(${campground.facilityPhotos[0]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'}}>
                  <CardTitle style={campgroundNameStyle} className='card-title h2 py-2 text-light text-center'>{campground.facilityName}</CardTitle>
                </div>
                <CardBody className='card-body campground-body py-2 px-2 mt-4'>
                  <CardText className='h5 d-inline'>{`$${campground.price}.00 / night`}</CardText>
                  <div className='d-inline float-right'>
                    <Rating
                      readonly={true}
                      initialRating={5}
                      emptySymbol='far fa-star'
                      fullSymbol='fas fa-star' />
                  </div>
                </CardBody>
              </Card>
            </a>
          </Col>
        )}
      </Row>
    </Container>
  )
}
