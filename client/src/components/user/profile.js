import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button, PageHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'




  class Profile extends Component {






    handleClick = event => {
      console.log(event.target.value)
    }


    render() {
      {console.log(this.props.leagues)}
      return (
        <div>
        <PageHeader className="welcome">Welcome {this.props.user.username}!</PageHeader>
        <Panel>
        <Panel.Heading>My Leagues <Link to="/leagues/new"><Button className="pull-right" bsStyle="success" bsSize="xsmall" value={1} onClick={this.handleClick}>Create New League</Button></Link></Panel.Heading>
        {this.props.leagues.map(el => {
          return <Panel.Body key={el.id}>{el.name}<Button bsStyle="info" bsSize="xsmall" value={el.id} onClick={this.handleClick}>View</Button></Panel.Body>
            }
          )
        }
        </Panel>
        </div>
      )
    }
  }


  const mapStateToProps = (state) => {
    return  {
      user: state.user.user.user,
      leagues: state.user.leagues
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchLeagues: (leagues) => dispatch({type: "FETCH_LEAGUES", leagues: leagues })
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
