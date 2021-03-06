import React from 'react';
// import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { logOut } from '../actions/users/logout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import capitalize from '../functions/capitalize'


const CustomNavbar = (props) => {

  const renderLinks = () => {
    if (props.user === ''){
      let links = ["home","login","register"]
        return links.map(el => {
          let id = links.findIndex(element => element === el)  + 1
          return   <NavItem key={id} eventKey={id} componentClass={Link} href={`/${el}`}  to={`/${el}`}> {capitalize(el)}</NavItem>
                })
    } else {
      let links = ["home","logout","profile"]
      return links.map(el => {
        let id = links.findIndex(element => element === el)  + 1
        if (el === "logout") {
          return <NavItem key={id} eventKey={id} componentClass={Link} href="/home"  to="/home" onClick={props.logOut}> {capitalize(el)}</NavItem>
        } else {
        return   <NavItem key={id} eventKey={id} componentClass={Link} href={`/${el}`}  to={`/${el}`} > {capitalize(el)}</NavItem>
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
