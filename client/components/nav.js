import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Popover,
  Button,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavbarToggler } from 'reactstrap'
import CartPopover from './cart-popover.js'

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
              <Row className='justify-content-end'>
                <NavItem>
                  <Button className='text-white cart-link bg-transparent border-0 pr-1 ml-1'><i title='Favorites' className='fas fa-heart cart-icon mt-1 ml-2'></i><Badge style={{transform: 'translateY(-15px)'}} className='px-2 mr-2' color='secondary'>0</Badge></Button>
                </NavItem>
                <NavItem>
                  <Button id='Popover1' onClick={this.toggle} className='text-white cart-link bg-transparent border-0 float-right pl-1'><i title='Cart' className='fas fa-shopping-cart cart-icon mt-1'></i><Badge style={{transform: 'translateY(-15px)'}} className='px-2 mr-2' color='secondary'>{this.state.reservations && this.state.reservations.length}</Badge></Button>
                  <Popover style={popoverStyle} className='w-100 p-0' placement="bottom" isOpen={this.state.isOpen} target="Popover1" toggle={this.toggle}>
                    <CartPopover orders={this.state.orders} reservations={this.state.reservations} toggle={this.toggle} />
                  </Popover>
                </NavItem>
              </Row>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
