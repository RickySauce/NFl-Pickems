import React, { Component } from 'react';
import { resetLoggingOut } from '../actions/users/resetloggingout';
import { connect } from 'react-redux';
import { Panel, Button, PageHeader, Col, Grid, Row } from 'react-bootstrap'


class Home extends Component {

    renderMessage = () => {
      return this.props.logging_out === true ? "Successfully logged out" : "Welcome"
    }

    componentWillUnmount(){
      this.props.resetLoggingOut()
    }

    render() {
      return (
        <div>
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
