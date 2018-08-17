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
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavbarToggler } from 'reactstrap'

const popoverStyle = {
  maxHeight: '300px',
  overflow: 'scroll'
}

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      collapsed: false
    }
    this.toggle = this.toggle.bind(this)
    this.refreshReservationList = this.refreshReservationList.bind(this)
    this.refreshPastOrdersList = this.refreshPastOrdersList.bind(this)
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
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

  refreshPastOrdersList() {
    fetch('/orders')
      .then(res => res.json())
      .then(orders => {
        this.setState({
          orders: orders
        })
      })
  }

  componentDidMount() {
    this.refreshReservationList()
    this.refreshPastOrdersList()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reservations !== this.state.reservations) {
      this.refreshReservationList()
    }
    if (prevState.orders !== this.state.orders) {
      this.refreshPastOrdersList()
    }
  }

  render() {
    return (
      <div>
        <Navbar className='main-nav fixed-top shadow' color='success' dark expand='md'>
          <NavbarBrand className='text-white nav-logos' href='#campground-list'><i className='fas fa-fire logo-icon mr-2'></i>Campr</NavbarBrand>
          <NavbarToggler className='text-white' onClick={this.toggleCollapse} />
          <Collapse className='bg-success' isOpen={this.state.collapsed} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink className='text-white pl-2 home-link' href='#campground-list'>Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className='text-white pl-2 home-link'>
                  Tools
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag='a' href='#mileage-calculator'>
                      Gas Mileage Calculator
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button id='Popover1' onClick={this.toggle} className='text-white cart-link bg-transparent border-0 float-right'><i className='fas fa-shopping-cart cart-icon mt-1 ml-2'></i><Badge style={{transform: 'translateY(-15px)'}} className='px-2' color='secondary'>{this.state.reservations && this.state.reservations.length}</Badge></Button>
                <Popover style={popoverStyle} className='w-100 p-0' placement="bottom" isOpen={this.state.isOpen} target="Popover1" toggle={this.toggle}>
                  <PopoverHeader className='text-center'>Pending Reservations</PopoverHeader>
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
                      : <div className='text-center my-3'>You have no pending reservations.</div>}
                  </PopoverBody>
                  <PopoverHeader className='text-center'>Past Orders</PopoverHeader>
                  <PopoverBody className='p-0'>
                    { this.state.orders && this.state.orders.length !== 0
                      ? this.state.orders.map((order, index) =>
                        <a href={`#confirmation?orderId=${order.orderId}`} onClick={this.toggle} key={index}>
                          <PopoverBody className='reservation-popover rounded'>
                            <Row>
                              <Col xl='12' lg='12'>
                                <div>{order.park}</div>
                                <div>{`${order.startDate} - ${order.endDate}`}</div>
                                <div>{`Guests: ${order.guests}`}</div>
                              </Col>
                            </Row>
                          </PopoverBody>
                        </a>
                      )
                      : <div className='text-center my-3'>You have no past orders.</div>}
                  </PopoverBody>
                </Popover>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
