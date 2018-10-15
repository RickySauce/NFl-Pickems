import React, { Component } from 'react';
import { connect } from 'react-redux';




  class Profile extends Component {
    render() {
      return (
        <h1>Welcome {this.props.user.username}!</h1>
      )
    }
  }


  const mapStateToProps = (state) => {
    return  {
      user: state.user.user
    }
  }


export default connect(mapStateToProps)(Profile)
