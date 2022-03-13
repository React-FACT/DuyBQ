import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>DASHBOARD</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
