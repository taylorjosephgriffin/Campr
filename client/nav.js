import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row} from 'reactstrap';


export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
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
                <Col className='pl-0 pr-3'>
                  <NavItem>
                    <NavLink className='text-white cart-link' href='#cart-view'><i className='fas fa-shopping-cart cart-icon mt-1 ml-2'></i></NavLink>
                  </NavItem>
                </Col>
              </Row>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
