import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText } from 'reactstrap'

export default function CampgroundList(props) {

  return (
    <Container fluid>
      <Row>
        { props.campgrounds.map((campground, index) =>
          <Col xl='4' lg='6' key={index} className='mb-3 translate-2'>
            <a className='campground-link' href={`#details?id=${campground.id}`}>
              <Card data-id={campground.id} className='h-100 campground-card shadow'>
                <div
                  className='card-img-top shadow campground-list-image h-100'
                  style={{backgroundImage: `url(${campground.facilityPhotos[0]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'}}>
                  <CardTitle className='card-title h2 py-2 campground-name text-light text-center'>{campground.facilityName}</CardTitle>
                </div>
                <CardBody className='card-body campground-body py-2 pl-2'>
                  <CardText className='h5 mt-4'>{`$${campground.price}.00 / night`}</CardText>
                </CardBody>
              </Card>
            </a>
          </Col>
        )}
      </Row>
    </Container>
  )
}
