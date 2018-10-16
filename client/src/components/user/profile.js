import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button, PageHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'




  class Profile extends Component {

    handleClick = event => {
      console.log(event.target.value)
    }
    render() {
      return (
        <div>
        <PageHeader className="welcome">Welcome {this.props.user.username}!</PageHeader>
        <Panel>
        <Panel.Heading>My Leagues <Link to="/leagues/new"><Button className="pull-right" bsStyle="success" bsSize="xsmall" value={1} onClick={this.handleClick}>Create New League</Button></Link></Panel.Heading>
        <Panel.Body >League 1 name <Button bsStyle="info" bsSize="xsmall" value={1} onClick={this.handleClick}>View</Button></Panel.Body>
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