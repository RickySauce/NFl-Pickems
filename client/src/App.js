import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import CustomNavbar from './components/navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/LoginRegistration/login'
import Register from './components/LoginRegistration/register'

class App extends Component {

  componentWillMount(){
    let id = sessionStorage.getItem("ID")
  }

  render() {
    return (
      <Router>
      <React.Fragment>
      <Header/>
      <CustomNavbar/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
