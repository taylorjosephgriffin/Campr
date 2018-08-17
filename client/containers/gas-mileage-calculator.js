
import React from 'react'
import {
  Container,
  Col,
  Card,
  CardHeader } from 'reactstrap'
import GasMileageForm from '../components/gas-mileage-form.js'

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

    this.state = {
      submitted: false,
      tripInfo: {}
    }
    this.handleMileageSubmit = this.handleMileageSubmit.bind(this)
  }

  handleMileageSubmit(event) {
    event.preventDefault()
    const mileageData = new FormData(event.target)
    const vehicleType = mileageData.get('type')
    const vehicleInfo = mileageData.get('vehicleInfo')
    const distance = mileageData.get('distance')
    const mileage = mileageData.get('mileage')
    const price = mileageData.get('price')
    const total = Number.parseFloat(parseInt(distance) / parseInt(mileage) * parseInt(price)).toFixed(2)
    const tripInfo = {
      vehicleType: vehicleType,
      vehicleInfo: vehicleInfo,
      total: total
    }

    this.setState({
      tripInfo: tripInfo
    })
  }

  render() {
    return (
      <div>
        <div style={divStyle1}>
          <div style={layer}>
          </div>
        </div>
        <Container fluid className='pt-1 mt-5'>
          <Col xl='6' lg='8' md='12' sm='12' className='reservation-page m-auto'>
            <Card style={cardBody}>
              <CardHeader className='text-center display-4 text-dark pb-2'>
                Trip Cost Calculator
              </CardHeader>
              <GasMileageForm
                tripInfo={this.state.tripInfo}
                handleMileageSubmit={this.handleMileageSubmit} />
            </Card>
          </Col>
        </Container>
      </div>
    )
  }
}
