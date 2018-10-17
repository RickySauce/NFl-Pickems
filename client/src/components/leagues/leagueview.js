import React, { Component } from 'react';
import { Panel, Button, PageHeader } from 'react-bootstrap'





export default class League extends Component {

  state = {
    name: "",
    users: [],
    owner_id: ""
  }

  componentDidMount() {
    fetch(`/api/leagues/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(json => {console.log(json);this.setState({name: json.name, users: [...json.users], owner_id: json.owner_id})})
  }


  render() {

    return (
      <div>
      <PageHeader className="welcome">{this.state.name}</PageHeader>
      <Panel>
      <Panel.Heading>Members</Panel.Heading>
      {this.state.users.map(u => {
        return <Panel.Body key={u.id}>{u.username} {this.state.owner_id === u.id ? "OWNER" : ""}</Panel.Body>
        }
      )
    }
      </Panel>
      </div>
    )
  }
}
