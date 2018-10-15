import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import CustomNavbar from './components/navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/LoginRegistration/login'
import Register from './components/LoginRegistration/register'
import { connect } from 'react-redux';
import { fetchUser } from './actions/fetchUser'


class App extends Component {

  componentWillMount(){
    let id = sessionStorage.getItem("ID")
  if (typeof(id) === "string") {
      fetchUser(id)
  }

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

const mapStateToProps = state => {

}



export default connect(mapStateToProps, {fetchUser})(App);
