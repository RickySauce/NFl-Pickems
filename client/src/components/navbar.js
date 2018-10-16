import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { logOut } from '../actions/logout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const CustomNavbar = (props) => {

  function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderLinks = () => {
    if (props.user === ''){
      let links = ["home","login","register"]
        return links.map(el => {
          let id = links.findIndex(element => element === el)  + 1
          return   <NavItem eventKey={id} componentClass={Link} href={el}  to={el}> {capitalize(el)}</NavItem>
                })
    } else {
      let links = ["home","logout","profile"]
      return links.map(el => {
        let id = links.findIndex(element => element === el)  + 1
        if (el === "logout") {
          return <NavItem eventKey={id} componentClass={Link} href="/home"  to="/home" onClick={props.logOut}> {capitalize(el)}</NavItem>
        } else {
        return   <NavItem eventKey={id} componentClass={Link} href={el}  to={el}> {capitalize(el)}</NavItem>
        }
      })
    }
  }


  return (
  <div>
  <Navbar default collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">NFL PICKEMS</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      {renderLinks()}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
}


export default connect(null,{logOut})(CustomNavbar);
