import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button, PageHeader } from 'react-bootstrap'
import MembersList from './members/membersList'
import SeasonContainer from './seasons/seasonContainer'
import {fetchLeague} from '../../actions/league/fetchLeague'
import {resetLeague} from '../../actions/league/resetLeague'
import {postUser} from '../../actions/league/postUser'
import Popup from "reactjs-popup";
import '../../css/members.css'


 class League extends Component {
   state = {
      adding: false,
      username: ''
   }

  componentWillMount() {
    this.props.fetchLeague(this.props.match.params.id)
  }

  componentWillUnmount(){
    this.props.resetLeague()
  }

    renderMembersList = () => {
      return this.props.loading === false ? <MembersList users={this.props.users}/> : null
    }

    renderSeasonView = () => {
      return this.props.loading === false ? <SeasonContainer/> : null
    }

    addUser = (event) => {
      event.preventDefault()
      this.props.postUser(this.state.username,this.props.match.params.id)
    }

    handleChange = (event) => {
        this.setState({username: event.target.value})
    }


  render() {
    return (
      <div>
        <PageHeader className="welcome">{this.props.name}</PageHeader>
        <div id='members-list-container'>
          <Panel id="members-list">
          <Panel.Heading>Members {this.props.owner ? <Popup trigger={<Button className="pull-right" bsStyle="success" bsSize="xsmall" onClick={this.addUser} value={1}>+</Button>} position="right center">
          <form onSubmit={this.addUser}>
          <input type="text"  onChange={this.handleChange} name="username" placeholder="User"/>
          <input type="submit" value="Add" />
          </form>
          </Popup> : null }</Panel.Heading>
          {this.renderMembersList()}
          </Panel>
        </div>
        {this.renderSeasonView()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    users: state.league.league.users,
    owner: state.league.league.owner,
    name: state.league.league.name,
    loading: state.league.loading
  }
}

export default connect(mapStateToProps,{fetchLeague, resetLeague, postUser})(League)
