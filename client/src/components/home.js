import React, { Component } from 'react';
import { resetLoggingOut } from '../actions/users/resetloggingout';
import { connect } from 'react-redux';
import { Panel, Button, PageHeader, Col, Grid, Row } from 'react-bootstrap'
import LeagueSideNav from './leagues/leagueSideNav'


class Home extends Component {

    renderMessage = () => {
      return this.props.logging_out === true ? "Successfully logged out" : "Welcome"
    }

    componentWillUnmount(){
      this.props.resetLoggingOut()
    }

    render() {
      console.log(this.props.logging_out)
      return (
        <div>

          <Col xs={12} md={1} lg={4}>
          <LeagueSideNav/>
          </Col>

        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return  {
      user: state.user.user,
      logging_out: state.user.logging_out
    }
  }

export default connect(mapStateToProps, {resetLoggingOut})(Home);
