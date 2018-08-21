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
import FavoritesPopover from './favorites-popover.js'

const popoverStyle = {
  maxHeight: '300px',
  overflow: 'scroll'
}

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cartOpen: false,
      favOpen: false,
      collapsed: false
    }
    this.toggleCart = this.toggleCart.bind(this)
    this.toggleFavs = this.toggleFavs.bind(this)
    this.refreshReservationList = this.refreshReservationList.bind(this)
    this.refreshPastOrdersList = this.refreshPastOrdersList.bind(this)
    this.refreshFavorites = this.refreshFavorites.bind(this)
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  toggleCart() {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }

  toggleFavs() {
    this.setState({
      favOpen: !this.state.favOpen
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

  refreshFavorites() {
    fetch('/favorites')
      .then(res => res.json())
      .then(favorites => {
        this.setState({
          favorites: favorites
        })
      })
  }

  componentDidMount() {
    this.refreshReservationList()
    this.refreshPastOrdersList()
    this.refreshFavorites()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reservations !== this.state.reservations) {
      this.refreshReservationList()
    }
    if (prevState.orders !== this.state.orders) {
      this.refreshPastOrdersList()
    }
    if (prevState.favorites !== this.state.favorites) {
      this.refreshFavorites()
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
                  <Button id="Popover2" onClick={this.toggleFavs} className='text-white cart-link bg-transparent border-0 pr-1 ml-1'><i title='Favorites' className='fas fa-heart cart-icon mt-1 ml-2'></i><Badge style={{transform: 'translateY(-15px)'}} className='px-2 mr-2' color='secondary'>{this.state.favorites && this.state.favorites.length}</Badge></Button>
                  <Popover style={popoverStyle} className='w-100 p-0' placement="bottom" isOpen={this.state.favOpen} target="Popover2" toggle={this.toggleFavs}>
                    <FavoritesPopover collapse={this.toggleCollapse} favorites={this.state.favorites} toggle={this.toggleFavs} />
                  </Popover>
                </NavItem>
                <NavItem>
                  <Button id='Popover1' onClick={this.toggleCart} className='text-white cart-link bg-transparent border-0 float-right pl-1'><i title='Cart' className='fas fa-shopping-cart cart-icon mt-1'></i><Badge style={{transform: 'translateY(-15px)'}} className='px-2 mr-2' color='secondary'>{this.state.reservations && this.state.reservations.length}</Badge></Button>
                  <Popover style={popoverStyle} className='w-100 p-0' placement="bottom" isOpen={this.state.cartOpen} target="Popover1" toggle={this.toggleCart}>
                    <CartPopover collapse={this.toggleCollapse} orders={this.state.orders} reservations={this.state.reservations} toggle={this.toggleCart} />
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
