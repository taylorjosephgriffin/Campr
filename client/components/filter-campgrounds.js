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
        <Row className='justify-content-end reservation-page mt-2'>
          <Form className='col-lg-11 col-sm-11 col-12'>
            <Row className='justify-content-start mb-2'>
              <Col lg='5' sm='8' xs='7' className='mt-2 pr-1'>
                <Input type='text' name='address' placeholder='Enter your full address' required></Input>
              </Col>
              <Col lg='1' sm='2' xs='2' className='mt-2 pl-0 pr-1'>
                <Input type='select' name='distance' required>
                  <option value='160934'>{'<' + ' 100 Miles'}</option>
                  <option value='321869'>{'<' + ' 200 Miles'}</option>
                  <option value='482803'>{'<' + ' 300 Miles'}</option>
                  <option value='643738'>{'<' + ' 400 Miles'}</option>
                  <option value='804672'>{'<' + ' 500 Miles'}</option>
                  <option value='10000000'>{'All'}</option>
                </Input>
              </Col>
              <Col lg='1' sm='1' xs='2' className='mt-2 pl-0'>
                <Button type='submit'>Search</Button>
              </Col>
            </Row>
          </Form>
          <Col lg='1' sm='1' xs='12'>
            <Button
              id='Popover3'
              color='transparent'
              className='border-0 ml-2 mt-2 bg-transparent float-right'
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
