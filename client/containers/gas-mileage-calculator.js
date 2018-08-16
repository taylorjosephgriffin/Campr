
import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap'

const cardBody = {
  width: '100%',
  marginTop: '10vh',
  marginBottom: '5vh'
}

const bgImage = 'https://www.outsideonline.com/sites/default/files/styles/full-page/public/2017/09/05/start-car-camping-distilled_h.jpg?itok=9-nAk223'

const divStyle1 = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  zIndex: '-999999'
}

const layer = {
  backgroundColor: 'rgba(241, 150, 164, 0.5)',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%'
}

export default class GasMileageCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.handleMileageSubmit = this.handleMileageSubmit.bind(this)
  }

  handleMileageSubmit(event) {
    event.preventDefault()
    const mileageData = new FormData(event.target)
    const vehicleType = mileageData.get('type')
    const distance = mileageData.get('distance')
    const mileage = mileageData.get('mileage')
    const price = mileageData.get('price')
    const total = parseInt(distance) / parseInt(mileage) * parseInt(price)
    console.log(`$ ${Number.parseFloat(total).toFixed(2)}`)
  }

  render() {
    return (
      <div>
        <div style={divStyle1}>
          <div style={layer}>
          </div>
        </div>
        <Container fluid className='mt-5'>
          <Row className='justify-content-center'>
            <Col xl='8' lg='8' md='12' sm='12' className='reservation-page'>
              <Card className='text-center border-secondary' style={cardBody}>
                <CardHeader className='h1 text-dark'>Trip Cost Calculator</CardHeader>
                <CardBody className='p-2'>
                  <Form onSubmit={this.handleMileageSubmit}>
                    <FormGroup className='px-5'>
                      <legend>Choose your type of vehicle.</legend>
                      <Label check>
                        <Input id='car-radio' type='radio' name='type' value='car' required/>
                        Car
                      </Label>
                    </FormGroup>
                    <FormGroup className='px-5'>
                      <Label check>
                        <Input id='van-radio' type='radio' name='type' value='van' required/>
                        Van
                      </Label>
                    </FormGroup>
                    <FormGroup className='px-5'>
                      <Label check>
                        <Input id='truck-radio' type='radio' name='type' value='truck' required/>
                        Truck
                      </Label>
                    </FormGroup>
                    <legend>Distance in Miles</legend>
                    <FormGroup>
                      <Input type='number' name='distance' required/>
                    </FormGroup>
                    <legend>Fuel Efficiency in MPG</legend>
                    <FormGroup>
                      <Input type='number' name='mileage' required/>
                    </FormGroup>
                    <legend>Fuel Price / Gallon</legend>
                    <FormGroup>
                      <Input type='input' name='price' required/>
                    </FormGroup>
                    <Button type='submit'>Calculate</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
