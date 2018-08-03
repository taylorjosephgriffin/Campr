import React, { Fragment } from 'react'
import Confirm from '../components/confirm.js'
import { Col, Label } from 'reactstrap'
import Stepper from '../components/stepper.js'

let image = 'https://web.sonoma.edu/campusrec/images/wwp/backpack_tahoe.jpg'

const divStyle1 = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${image})`,
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

export default class CheckoutWizard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      step: {
        confirm: 33.33
      }
    }
    this.renderDetails = this.renderDetails.bind(this)
    this.renderPrice = this.renderPrice.bind(this)
    this.refreshReservations = this.refreshReservations.bind(this)
  }

  refreshReservations() {
    fetch('/reservations/' + this.props.params.reservationId)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reservation: data
        })
      })
  }

  componentDidMount() {
    this.refreshReservations()
  }

  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      this.refreshReservations()
    }
  }

  renderDetails(label, data, style, xlSize, smSize, xsSize) {
    return <Col style={style} xl={xlSize} lg={xlSize} md={xlSize} sm={smSize} xs={xsSize}>
      <Label>{label}</Label>
      <h5>{data}</h5>
    </Col>
  }

  renderPrice(label, data, style, size, className) {
    return <Fragment>
      <Col style={style} xl={size} lg={size} sm={size} xs={size}>
        <h4 className={className}>{label}</h4>
      </Col>
      <Col style={style} xl={size} lg={size} sm={size} xs={size}>
        <h4 className={`float-right ${className}`}>{data}</h4>
      </Col>
    </Fragment>
  }

  render() {
    return (
      <div>
        <div style={divStyle1}>
          <div style={layer}>
          </div>
        </div>
        <Stepper step={this.state.step}/>
        {this.state.reservation && <Confirm
          params={this.props.params}
          renderPrice={this.renderPrice}
          renderDetails={this.renderDetails}
          reservation={this.state.reservation}></Confirm>}
      </div>

    )
  }
}
