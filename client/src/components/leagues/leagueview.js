import React, { Component } from 'react';
import { Panel, Button, PageHeader } from 'react-bootstrap'
import LeagueSideNav from './leagueSideNav'




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
        return <Panel.Body key={u.id}>{this.state.owner_id === u.id ? <img style={{width: "18px", height: "18px"}} src={require('./image/crown.jpg')} alt="crown" title="crown" /> : ""} {u.username}</Panel.Body>
        }
      )
    }
      </Panel>
      </div>
    )
  }
}
