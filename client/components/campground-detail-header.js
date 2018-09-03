import React from 'react'
import Service from './service.js'
import CampgroundDetailCarousel from './campground-detail-carousel.js'
import { Container,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Button
} from 'reactstrap'
import CampgroundReviews from './campground-reviews.js'

const buttonStyle = {
  height: '50px'
}
const heartStyle = {
  fontSize: '35px'
}
const campgroundCardStyle = {
  minHeight: '400px'
}
const campgroundNameStyle = {
  overflowWrap: 'normal'
}
const hrDetailStyle = {
  borderTop: '3px double #8c8b8b'
}

export default class CampgroundDetailHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inFavorites: null
    }
    this.setFavorites = this.setFavorites.bind(this)
    this.favoriteStatus = this.favoriteStatus.bind(this)
  }

  componentDidMount() {
    this.favoriteStatus()
  }

  favoriteStatus() {
    fetch('/favorites')
      .then(res => res.json())
      .then(favorites => {
        const isFavorited = favorites.filter(favorite => {
          return favorite.id === this.props.params.id
        })
        if (isFavorited.length > 0) this.setState({inFavorites: true})
        else this.setState({inFavorites: false})
      })
  }

  setFavorites() {
    if (this.state.inFavorites) {
      fetch('/favorites/' + this.props.params.id, { method: 'DELETE' })
        .then(() => this.favoriteStatus())
        .catch(err => console.error(err))
    }
    else {
      fetch('/campgrounds/' + this.props.params.id)
        .then(res => res.json())
        .then(campground => {
          fetch('/favorites/' + this.props.params.id, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(campground)
          })
          this.favoriteStatus()
        })
        .catch(err => console.error(err))
    }
  }

  render() {
    return (
      <Container fluid className='mt-5 pt-5'>
        <Row>
          <Col xl='12'>
            <CardBody style={campgroundCardStyle}>
              <Row className='card-detail-page'>
                <Col xl='4' lg='12' md='12' sm='12' xs='12'>
                  <Card style={campgroundNameStyle}>
                    <hr style={hrDetailStyle}/>
                    <CardTitle className='h1 py-2 text-center text-dark mt-3'>{ this.props.campground.facilityName }</CardTitle>
                    <hr style={hrDetailStyle}/>
                    <Container fluid>
                      <Row className='mt-4'>
                        <Col>
                          <h3 className='text-dark'><u>Activities</u></h3>
                        </Col>
                      </Row>
                      <Row>
                        { this.props.campground.amenities.map((amenity, index) =>
                          <Col key={index} xl='6' lg='6' md='6' sm='6' xs='12'>
                            <ul className='list-group text-center'>
                              <li className='list-group-item mt-3'>{amenity}</li>
                            </ul>
                          </Col>
                        )}
                      </Row>
                      <Row className='mt-3'>
                        <Col>
                          <h3 className='text-dark'><u>Accomodations</u></h3>
                        </Col>
                      </Row>
                      <Row className='mt-1'>
                        <Service hasService={this.props.campground.petsAllowed} service={'Allows pets'} />
                        <Service hasService={this.props.campground.hasFireRing} service={'Fire Rings'} />
                        <Service hasService={this.props.campground.hasAmps} service={'Amps'} />
                        <Service hasService={this.props.campground.hasSewer} service={'Sewer'} />
                        <Service hasService={this.props.campground.hasWater} service={'Water'} />
                        <Service hasService={this.props.campground.hasRestroom} service={'Restroom'} />
                      </Row>
                      <Row className='mt-4'>
                        <Col xl='6' lg='6' md='6' sm='6' xs='12'>
                          <ListGroup className='mt-2'>
                            <ListGroupItem>
                              Check-in: {this.props.campground.checkIn}:00pm
                            </ListGroupItem>
                          </ListGroup>
                        </Col>
                        <Col xl='6' lg='6' md='6' sm='6' xs='12'>
                          <ListGroup className='mt-2'>
                            <ListGroupItem>
                              Check-out: {this.props.campground.checkOut}:00pm
                            </ListGroupItem>
                          </ListGroup>
                        </Col>
                      </Row>
                      <Row className='justify-content-end'>
                        <Col xl='7' lg='8' md='6' sm='6' xs='6' className='mt-5 pb-4'>
                          <Button onClick={this.setFavorites} color='transparent' style={buttonStyle} className='mt-4 float-left'>
                            <i style={heartStyle} className={this.state.inFavorites ? 'fas fa-heart text-secondary' : 'far fa-heart text-secondary'}></i>
                          </Button>
                        </Col>
                        <Col xl='5' lg='4' md='6' sm='6' xs='6' className='mt-5 pb-4'>
                          <a href={`#campsite?facilityNum=${this.props.campground.facilityNum}&id=${this.props.campground.id}`}>
                            <Button color='primary' style={buttonStyle} className='shadow mt-4 w-100 float-right'>
                              Campsites
                            </Button>
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </Card>
                </Col>
                <CampgroundDetailCarousel campground={this.props.campground} carouselClick={this.props.carouselClick} carouselIndex={this.props.carouselIndex}/>
              </Row>
            </CardBody>
            <CampgroundReviews params={this.props.params}/>
          </Col>
        </Row>
      </Container>
    )
  }
}
