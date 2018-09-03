import React from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardText,
  Button,
  CardBody } from 'reactstrap'
import ReviewModal from './review-modal.js'

export default class CampgroundReviews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
    this.createReview = this.createReview.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  createReview(review) {
    fetch('/reviews/' + this.props.params.id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(review)
    }).then(() => this.toggle())
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <CardBody>
          <Row>
            <Col xl='12'>
              <Card className='mt-3'>
                <CardHeader
                  className='h1'>
                  Reviews
                  <Button
                    onClick={this.toggle}
                    className='float-right'>
                    Leave a Review
                  </Button>
                </CardHeader>
                <CardBody style={{height: '400px', overflow: 'scroll'}}>
                  <CardText>No reviews.</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
        <ReviewModal
          isOpen={this.state.isOpen}
          toggleReviewModal={this.toggle}
          params={this.props.params}
          createReview={this.createReview} />
      </div>
    )
  }
}
