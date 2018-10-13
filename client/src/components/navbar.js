import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const nav1 = (
<Navbar default collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">NFL PICKEMS</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
  <NavItem eventKey={1} componentClass={Link} href="/"  to="/">
      Home
      </NavItem>
  <NavItem eventKey={2} componentClass={Link} href="/login" to="/login">
      Login
      </NavItem>
  <NavItem eventKey={3} componentClass={Link} href="/register" to="/register">
      Register
      </NavItem>
    </Nav>
    </Navbar.Collapse>
  </Navbar>)





  export default class CustomNavbar extends React.Component {


    render() {
      return(
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">NFL PICKEMS</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
          <NavItem eventKey={1} componentClass={Link} href="/"  to="/">
              Home
              </NavItem>
          <NavItem eventKey={2} componentClass={Link} href="/login" to="/login">
              Login
              </NavItem>
          <NavItem eventKey={3} componentClass={Link} href="/register" to="/register">
              Register
              </NavItem>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
    )
    }
  }
