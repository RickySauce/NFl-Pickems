import React, { Component } from 'react';
import { Panel, Button, PageHeader, Col } from 'react-bootstrap'
import LeagueSideNav from './leagueSideNav'
import MembersList from './members/membersList'
import SeasonContainer from './seasons/seasonContainer'



export default class League extends Component {

  state = {
    name: "",
    users: [],
    ownerId: "",
    owner: false,
    id: "",
    currentSeason: ""
  }

  componentWillMount() {
    fetch(`/api/leagues/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(json => {this.setState({name: json.name, users: [...json.users], ownerId: json.owner_id, id: json.id, currentSeason: json.current_season,
      owner: parseInt(sessionStorage.getItem('ID')) === json.owner_id ? true : false
        }
        )
      }
    )
  }

  removeUser = (userId) => {
    if (this.state.owner === true){
      fetch(`/api/leagues/${this.state.id}/users/remove/${userId}`, {
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
      },
        method: "DELETE"
      })
      .then(res => this.setState({})
      )
    } else {
      return false
    }
  }

    renderMembersList = () => {
      return this.state.users.length > 0 ? <MembersList users={this.state.users} ownerId={this.state.ownerId} owner={this.state.owner} removeUser={this.removeUser}/> : null
    }

    renderSeasonView = () => {
      return this.state.id !== "" ? <SeasonContainer currentSeason={this.state.currentSeason} leagueId={this.state.id}/> : null
    }

  render() {
    return (
      <div>
      <PageHeader className="welcome">{this.state.name}</PageHeader>
      <div style={{width: "15%"}}>
      <Panel>
      <Panel.Heading>Members {this.state.owner ? <Button className="pull-right" bsStyle="success" bsSize="xsmall" value={1}>+</Button> : null }</Panel.Heading>
      {this.renderMembersList()}
      {this.renderSeasonView()}
      </Panel>
      </div>
      </div>
    )
  }
}
