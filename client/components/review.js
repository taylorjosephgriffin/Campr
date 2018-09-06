import React from 'react'
import {
  Col,
  Card,
  Container,
  CardBody,
  Row } from 'reactstrap'
import Rating from 'react-rating'

export default function RenderReview(props) {

  return (
    <Card>
      <Container fluid>
        <CardBody>
          <Row>
            <Col xl='2' lg='2' md='3' sm='12' xs='12'>
              <img style={{width: '100%'}} className='py-2' src='./assets/review-icon.png' />
              <div className='text-center text-dark'>{props.review.name}</div>
              <div className='text-center text-dark'>{props.review.location}</div>
              <div className='text-center text-dark'>{props.review.date}</div>
              <div className='text-center text-success'>
                <Rating
                  readonly={true}
                  initialRating={Number(props.review.rating)}
                  emptySymbol='far fa-star'
                  fullSymbol='fas fa-star' />
              </div>
            </Col>
            <Col xl='10' lg='10' md='9' sm='12' xs='12'>
              <div className='py-2 text-dark'>{props.review.review}</div>
            </Col>
          </Row>
        </CardBody>
      </Container>
    </Card>
  )
}
