import React from 'react'
import {
  Button,
  Row,
  Col,
  Container,
  Card,
  CardTitle,
  CardBody } from 'reactstrap'
import SiteInfo from './site-info.js'

const campsiteNumberStyle = {
  fontSize: '40px',
  fontWeight: '100',
  backgroundColor: 'rgba(122, 194, 173, 0.7)'
}

export default function CampsitesList(props) {

  if (props.activeSites.length === 0 || !props.campground) {
    return null
  }
  else {
    return (
      <Container fluid className='mt-5 pt-4'>
        <Row className='row'>
          { props.activeSites.map((site, index) =>
            <Col xl='4' lg='6' key={index} className='mt-4'>
              <Card className='h-100 campsite-card shadow'>
                <div
                  className='shadow card-img-top h-100'
                  style={{minHeight: '400px',
                    backgroundImage: `url(${site.sitePhoto})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'}}>
                  <CardTitle style={campsiteNumberStyle} className='h3 py-2 text-light text-center'>{`Site #${site.siteNumber}`}</CardTitle>
                </div>
                <CardBody className='py-2 pl-2 pr-2'>
                  <Row>
                    <SiteInfo content={`Price: $${props.campground.price}/night`} />
                    <SiteInfo content={`Max people: ${site.maxPeople}`} />
                    <SiteInfo content={`Max length: ${site.maxEqpLen}`} />
                    <SiteInfo content={`Max vehicles: ${site.maxVehicles}`} />
                    <SiteInfo content={`Site type: ${site.siteType}`} />
                    <SiteInfo
                      additionalElement={site.available
                        ? <i className='far fa-check-circle text-success' />
                        : <i className='far fa-times-circle text-danger' />}
                      content={`Available `} />
                    <Container>
                      <Row className='justify-content-end'>
                        <Col xl='4' lg='6' xs='6'>
                          <a href={window.location.hash + `&siteId=${site.siteId}`}>
                            <Button
                              disabled={!site.available}
                              id={site.siteId}
                              onClick={props.startReservation}
                              className={site.available ? 'float-right w-100 shadow bg-secondary' : 'float-right w-100 shadow disabled btn-dark'}
                              size='lg'>Book</Button>
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    )
  }
}
