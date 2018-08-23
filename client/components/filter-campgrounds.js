import React from 'react'
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input } from 'reactstrap'

const refineStyle = {
  marginLeft: '23%'
}

export default class Filter extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const filterForm = new FormData(event.target)
    const amenity = filterForm.get('activity').toLowerCase()
    const price = parseInt(filterForm.get('price'), 10)
    const filter = {}

    if (amenity !== 'none') {
      filter.amenities = [amenity]
    }
    if (price !== 'none') {
      filter.maxPrice = price
    }
    this.props.loadCampgrounds(filter)
  }

  render() {
    return (
      <Container fluid className='mt-5 pt-4'>
        <Row className='justify-content-end'>
          <Col lg='12'>
            <Button
              id='Popover3'
              color='transparent'
              className='border-0 ml-2 mt-2 float-right'
              onClick={this.props.toggle}>
              <i className='fas fa-filter text-primary h4'></i>
            </Button>
            <Popover className='w-100' placement="bottom" isOpen={this.props.popoverOpen} target="Popover3" toggle={this.props.toggle}>
              <PopoverHeader className='text-center'>Filter Results</PopoverHeader>
              <PopoverBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>Price</Label>
                    <Input type='select' name='price'>
                      <option>None</option>
                      <option value='45'>less than $45</option>
                      <option value='35'>less than $35</option>
                      <option value='25'>less than $25</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label className='mt-2'>Activities</Label>
                    <Input type='select' name='activity' >
                      <option>None</option>
                      <option>Birding</option>
                      <option>Boating</option>
                      <option>Campfire</option>
                      <option>Fishing</option>
                      <option>Hiking</option>
                      <option>Surfing</option>
                      <option>Kayaking</option>
                      <option>Swimming</option>
                      <option>Boldering</option>
                      <option>Rock Climbing</option>
                    </Input>
                    <Button type='submit' style={refineStyle} className='btn btn-secondary mt-4'>Refine Search</Button>
                  </FormGroup>
                </Form>
              </PopoverBody>
            </Popover>
          </Col>
        </Row>
      </Container>
    )
  }
}
