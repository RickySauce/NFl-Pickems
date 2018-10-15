import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button } from 'react-bootstrap'




  class Profile extends Component {

    handleClick = event => {
      console.log(event.target.value)
    }
    render() {
      return (
        <div>
        <h1 className="welcome">Welcome {this.props.user.username}!</h1>
        <Panel>
        <Panel.Heading>My Leagues</Panel.Heading>
        <Panel.Body >League 1 name <Button bsStyle="info" bsSize="xsmall" value={1} onClick={this.handleClick}>CLICK ME</Button></Panel.Body>
        <Panel.Body onClick={this.handleClick}>League 2 name</Panel.Body>
        </Panel>
        </div>
      )
    }
  }


  const mapStateToProps = (state) => {
    return  {
      user: state.user.user
    }
  }


export default connect(mapStateToProps)(Profile)
