import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
  Button,
  Badge } from 'reactstrap'

const popoverStyle = {
  maxHeight: '300px',
  overflow: 'scroll'
}

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
    this.refreshReservationList = this.refreshReservationList.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  refreshReservationList() {
    fetch('/reservations')
      .then(res => res.json())
      .then(reservation => {
        this.setState({
          reservations: reservation
        })
      })
  }

  componentDidMount() {
    this.refreshReservationList()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reservations !== this.state.reservations) {
      this.refreshReservationList()
    }
  }

  render() {
    return (
      <div>
        <Navbar className='main-nav fixed-top shadow' color='success' expand='md'>
          <NavbarBrand className='text-white nav-logos' href='#campground-list'><i className='fas fa-fire logo-icon mr-2'></i>Campr</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <Row>
              <Col className='px-0'>
                <NavItem>
                  <NavLink className='text-white home-link' href='#campground-list'>Home</NavLink>
                </NavItem>
              </Col>
              <Col className='pl-0 pr-1'>
                <NavItem>
                  <Button id='Popover1' onClick={this.toggle} className='text-white cart-link bg-transparent border-0'><i className='fas fa-shopping-cart cart-icon mt-1 ml-2'></i><Badge style={{transform: 'translateY(-15px)'}} className='px-2' color='secondary'>{this.state.reservations && this.state.reservations.length}</Badge></Button>
                  <Popover style={popoverStyle} className='w-100 p-0' placement="bottom" isOpen={this.state.isOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader className='text-center'>Reservations</PopoverHeader>
                    <PopoverBody className='p-0'>
                      { this.state.reservations && this.state.reservations.length !== 0
                        ? this.state.reservations.map((reservation, index) =>
                          <a href={`#checkout?reservationId=${reservation.reservationId}`} onClick={this.toggle} key={index}>
                            <PopoverBody className='reservation-popover rounded'>
                              <Row>
                                <Col xl='12' lg='12'>
                                  <div>{reservation.campsite.loop}</div>
                                  <div>{`${reservation.reservation.startDate} - ${reservation.reservation.endDate}`}</div>
                                  <div>{`Guests: ${reservation.reservation.guests}`}</div>
                                </Col>
                              </Row>
                            </PopoverBody>
                          </a>
                        )
                        : <div className='text-center my-3'>You have no reservations.</div>}
                    </PopoverBody>
                  </Popover>
                </NavItem>
              </Col>
            </Row>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
