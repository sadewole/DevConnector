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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authAction';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated } = this.props;
    const guestLink = (
      <Nav className='ml-auto' navbar>
        {' '}
        <NavItem>
          <NavLink href='/developers'>Developers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/register'>Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/signin'>Login</NavLink>
        </NavItem>
      </Nav>
    );

    const authUserLink = (
      <Nav className='ml-auto' navbar>
        {' '}
        <NavItem>
          <NavLink href='/developers'>Developers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>Post</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/dashboard'>Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.props.logout} href='/signin'>
            LogOut
          </NavLink>
        </NavItem>
      </Nav>
    );
    return (
      <div>
        <Navbar expand='md' dark color='dark' className='navbar'>
          <Container>
            {isAuthenticated ? (
              <NavbarBrand href='/dashboard'>
                <i className='fas fa-code'></i> DevConnector
              </NavbarBrand>
            ) : (
              <NavbarBrand href='/'>
                <i className='fas fa-code'></i> DevConnector
              </NavbarBrand>
            )}

            {/* <NavbarToggler className='toggler' onClick={this.toggle} /> */}
            <i className='fas fa-bars' onClick={this.toggle}></i>
            <Collapse isOpen={this.state.isOpen} navbar>
              {isAuthenticated ? authUserLink : guestLink}
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(AppNavbar);
