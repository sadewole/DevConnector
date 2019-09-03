import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar expand='md' dark color='dark' className='navbar'>
          <Container>
            <NavbarBrand href='/'>
              <i className='fas fa-code'></i> DevConnector
            </NavbarBrand>
            {/* <NavbarToggler className='toggler' onClick={this.toggle} /> */}
            <i className='fas fa-bars' onClick={this.toggle}></i>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='/developers'>Developers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/register'>Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='signin'>Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
