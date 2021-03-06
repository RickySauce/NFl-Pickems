import React, { Component } from 'react';
import { Panel, Button, PageHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'





  class ProfileView extends Component {


    handleClick = event => {
      console.log(event.target.value)
    }


    render() {
      return (
        <div>
        <PageHeader className="welcome">Welcome {this.props.user.username}!</PageHeader>
        <Panel>
        <Panel.Heading>My Leagues <Link to="/leagues/new"><Button className="pull-right" bsStyle="success" bsSize="xsmall" value={1} onClick={this.handleClick}>Create New League</Button></Link></Panel.Heading>
        {this.props.user.leagues.map(el => {
          return <Panel.Body key={el.id}>{el.name}  <Link to={`/league/${el.id}/view`}><Button bsStyle="info" bsSize="xsmall" value={el.id} onClick={this.handleClick}>View</Button></Link></Panel.Body>
            }
          )
        }
        </Panel>
        </div>
      )
    }
  }

export default ProfileView
