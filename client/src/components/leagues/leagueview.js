import React, { Component } from 'react';
import { Panel, Button, PageHeader, Col } from 'react-bootstrap'
import LeagueSideNav from './leagueSideNav'
import MembersList from './membersList'



export default class League extends Component {

  state = {
    name: "",
    users: [],
    owner_id: "",
    owner: false
  }

  componentWillMount() {
    fetch(`/api/leagues/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(json => {this.setState({name: json.name, users: [...json.users], owner_id: json.owner_id,
      owner: parseInt(sessionStorage.getItem('ID')) === json.owner_id ? true : false
        }
        )
      }
    )
  }

  removeUser = () => {
    if (this.state.owner === true){
      fetch('/api/leagues/:league_id/users/remove/:user_id', {
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
      },
        method: "DELETE"
      })
    } else {
      return false
    }
  }

    renderMembersList = () => {
      return this.state.users.length > 0 ? <MembersList users={this.state.users} owner_id={this.state.owner_id} removeUser={this.removeUser}/> : null
    }

  render() {
    return (
      <div>
      <PageHeader className="welcome">{this.state.name}</PageHeader>
      <div style={{width: "15%"}}>
      <Panel>
      <Panel.Heading>Members {this.state.owner ? <Button className="pull-right" bsStyle="success" bsSize="xsmall" value={1}>+</Button> : null }</Panel.Heading>
      {this.renderMembersList()}
      </Panel>
      </div>
      </div>
    )
  }
}
