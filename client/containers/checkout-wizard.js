import React, { Fragment } from 'react'
import Confirm from '../components/confirm.js'
import * as qs from 'qs'
import { Col, Label } from 'reactstrap'


export default class CheckoutWizard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.renderDetails = this.renderDetails.bind(this)
    this.renderPrice = this.renderPrice.bind(this)
  }

  componentDidMount() {
    const reservationId = qs.parse(location.hash.replace(/^(.*?)\?/, '')).reservationId
    fetch('/reservations/' + reservationId)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reservation: data
        })
      })
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
      !this.state.reservation
        ? null
        : <Confirm renderPrice={this.renderPrice} renderDetails={this.renderDetails} reservation={this.state.reservation}></Confirm>
    )
  }
}
