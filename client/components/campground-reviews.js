import React from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardText,
  CardBody } from 'reactstrap'

export default class CampgroundReviews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <CardBody>
        <Row>
          <Col xl='12'>
            <Card className='mt-3'>
              <CardHeader className='h1'>Reviews</CardHeader>
              <CardBody style={{height: '400px', overflow: 'scroll'}}>
                <CardText>No reviews.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    )
  }
}
