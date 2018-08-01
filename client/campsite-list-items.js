import React from 'react'
import { Button, Row, Col, Container } from 'reactstrap'
import Service from './service.js'
import * as qs from 'qs'
import SiteInfo from './site-info.js'

export default function CampsitesList(props) {

  const activeSites = props.campsites.filter(site => {
    const facilityQuery = location.hash.replace(/^(.*?)\?/, '')
    return site.facilityNum === qs.parse(facilityQuery).facilityNum
  })

  if (activeSites.length === 0 || !props.campground) {
    return null
  }
  else {
    return (
      <div className='container-fluid mt-5 pt-4'>
        <div className='row'>
        { activeSites.map((site, index) =>
          <div key={index} className='col-xl-4 col-lg-6 mt-4'>
            <div className='card h-100 campsite-card shadow'>
              <div
                className='shadow card-img-top campsite-list-image h-100'
                style={{backgroundImage:`url(${site.sitePhoto})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'}}>
                  <h5 className='card-title py-2 campsite-name text-light text-center'>{`Site #${site.siteNumber}`}</h5>
                </div>
              <div className='card-body py-2 pl-2 pr-2'>
                <div className='row'>
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
                            id={site.siteId}
                            onClick={site.available ? props.renderModal : null}
                            className={site.available ? 'float-right w-100 shadow bg-secondary' : 'float-right w-100 shadow disabled btn-dark'}
                            size='lg'>Book</Button>
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    )
  }
}
