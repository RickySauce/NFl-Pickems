import React, { Component } from 'react';
import { resetLoggingOut } from '../actions/resetloggingout';
import { connect } from 'react-redux';


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
          {this.renderMessage()}
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
