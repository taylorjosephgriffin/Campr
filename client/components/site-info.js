import React from 'react'
import {
  Col,
  CardText } from 'reactstrap'

export default function SiteInfo(props) {

  return (
    <Col xl='6' lg='6' col-xs='6' className='py-2'>
      <CardText className='h5'>{props.content}{props.additionalElement}</CardText>
    </Col>
  )
}
