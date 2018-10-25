import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import CustomNavbar from './components/navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/LoginRegistration/login'
import Register from './components/LoginRegistration/register'
import { connect } from 'react-redux';
import { fetchUser } from './actions/users/fetchUser'
import ProfileContainer from './components/user/profileContainer'
import LeagueForm from './components/leagues/createleague'
import Home from './components/home'
import League from './components/leagues/leagueview'
import jstz from 'jstz';
import moment from 'moment';
import 'moment-timezone';




class App extends Component {

  setTimeZone = () => {
    if (!sessionStorage.getItem('timezone')) {
      let tz = jstz.determine() || 'UTC';
      sessionStorage.setItem('timezone', tz.name());
    }
    // let currTz = sessionStorage.getItem('timezone');
    // let date = moment().format("YYYY-MM-DD");
    // let stamp = date + "T" + '14:30' + "Z";
    // let momentTime = moment(stamp);
    // let tzTime = momentTime.tz(currTz);
    // let formattedTime = tzTime.format('YYYY-MM-DD h:mm A');
  }

  componentWillMount(){
    this.setTimeZone()
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


export default connect(mapStateToProps, {fetchUser})(App);
