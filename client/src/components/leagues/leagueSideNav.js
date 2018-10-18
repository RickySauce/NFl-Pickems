import { Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React, {Component} from 'react';

 class LeagueSideNav extends Component {

       render() {
           return (
             <div>
             <Navbar className="sidebar-nav">
               <Navbar.Header>
                 <Navbar.Brand>
                   League Menu
                 </Navbar.Brand>
                 <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse>
                 <Nav>
                 <NavItem key={7} eventKey={7}>Home</NavItem>
                 </Nav>
                 </Navbar.Collapse>
               </Navbar>
             </div>
           );
       }
   }

export default LeagueSideNav
