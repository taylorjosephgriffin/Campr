import React, { Fragment } from 'react'
import { Col } from 'reactstrap'

export default function RenderPrice(props) {

  return (
    <Fragment>
      <Col style={props.style} xl={props.size} lg={props.size} sm={props.size} xs={props.size}>
        <h4 className={props.className}>{props.label}</h4>
      </Col>
      <Col style={props.style} xl={props.size} lg={props.size} sm={props.size} xs={props.size}>
        <h4 className={`float-right ${props.className}`}>{props.data}</h4>
      </Col>
    </Fragment>
  )
}
