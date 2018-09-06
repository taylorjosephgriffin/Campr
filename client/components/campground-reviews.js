import React from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  CardBody } from 'reactstrap'
import ReviewModal from './review-modal.js'
import RenderReview from './review.js'

export default class CampgroundReviews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      reviews: []
    }
    this.toggle = this.toggle.bind(this)
    this.createReview = this.createReview.bind(this)
    this.updateReviews = this.updateReviews.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.updateReviews()
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

  componentDidMount() {
    this.updateReviews()
  }

  updateReviews() {
    fetch('/reviews/' + this.props.params.id)
      .then(res => res.json())
      .then(reviews => {
        if (reviews) {
          this.setState({
            reviews: reviews.reviews
          })
        }
      })
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
                <CardBody style={{height: '400px', overflow: 'scroll', padding: '0'}}>
                  { this.state.reviews.length > 0
                    ? this.state.reviews.map((review, index) =>
                      <RenderReview
                        key={index}
                        review={review} />
                    )
                    : <Col className='mt-5 h-100'><span className='display-1 text-dark'>{'No Reviews'}</span></Col>
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
        <ReviewModal
          isOpen={this.state.isOpen}
          toggleReviewModal={this.toggle}
          params={this.props.params}
          createReview={this.createReview}
          reviews={this.state.reviews} />
      </div>
    )
  }
}
