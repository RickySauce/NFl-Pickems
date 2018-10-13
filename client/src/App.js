import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import CustomNavbar from './components/navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <Header/>
      <CustomNavbar/>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
