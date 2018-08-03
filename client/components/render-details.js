import React from 'react'
import { Col, Label } from 'reactstrap'

export default function RenderDetails(props) {

  return (
    <Col style={props.style} xl={props.xlSize} lg={props.xlSize} md={props.xlSize} sm={props.smSize} xs={props.xsSize}>
      <Label>{props.label}</Label>
      <h5>{props.data}</h5>
    </Col>
  )
}
