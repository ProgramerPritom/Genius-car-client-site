import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><img className='logo-img' src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="/home#services">Services</Nav.Link>
      <Nav.Link href="/home#exparts">Exparts</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {
        user && <>
        <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
        <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
        <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
        </>
      }
      {
          user ?
          <button className='btn btn-link text-decoration-none text-white' onClick={handleSignOut}>Signout</button>
          :
        <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;