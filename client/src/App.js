import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './header'
import CustomNavbar from './components/navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/LoginRegistration/login'
import Register from './components/LoginRegistration/register'
import { connect } from 'react-redux';
import { fetchUser } from './actions/users/fetchUser'
import { fetchTeams } from './actions/teams/fetchTeams'
import ProfileContainer from './components/user/profileContainer'
import LeagueForm from './components/leagues/createleague'
import Home from './components/home'
import League from './components/leagues/leagueview'
import jstz from 'jstz';
import 'moment-timezone';




class App extends Component {

  setTimeZone = () => {
    if (!sessionStorage.getItem('timezone')) {
      let tz = jstz.determine() || 'UTC';
      sessionStorage.setItem('timezone', tz.name());
    }
  }

  componentDidMount(){
    this.setTimeZone()
    this.props.fetchTeams()
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
      <Route exact path="/profile" component={ProfileContainer} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/leagues/new" component={LeagueForm} />
      <Route exact path="/league/:id/view" component={League} />
      <Route exact path="/home" component={Home} />
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


export default connect(mapStateToProps, {fetchUser, fetchTeams})(App);
