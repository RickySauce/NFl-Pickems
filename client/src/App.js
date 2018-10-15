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
import Profile from './components/user/profile'
import LeagueForm from './components/leagues/createleague'
class App extends Component {

  componentWillMount(){
    let id = sessionStorage.getItem("ID")
  if (typeof(id) === "string") {
      this.props.fetchUser(id)
  }

  }

  render() {
    return (
      <Router>
      <React.Fragment>
      <Header/>
      <CustomNavbar user={this.props.user}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/leagues/new" component={LeagueForm} />

      </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return  {
    user: state.user.user
  }
}


export default connect(mapStateToProps, {fetchUser})(App);
