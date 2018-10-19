import React, { Component } from 'react';
import { Panel, Button, PageHeader, Col } from 'react-bootstrap'
import LeagueSideNav from './leagueSideNav'




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
    .then(json => {console.log(json); this.setState({name: json.name, users: [...json.users], owner_id: json.owner_id,
      owner: parseInt(sessionStorage.getItem('ID')) === json.owner_id ? true : false
        }
        )
      }
    )
  }


  render() {
    console.log(this.state.owner)
    return (
      <div>
      <PageHeader className="welcome">{this.state.name}</PageHeader>
      <div style={{width: "15%"}}>
      <Panel>
      <Panel.Heading>Members {this.state.owner ? <Button className="pull-right" bsStyle="success" bsSize="xsmall" value={1}>+</Button> : null }</Panel.Heading>
      {this.state.users.map(u => {
        return <Panel.Body key={u.id}>{this.state.owner_id === u.id ? <img style={{width: "18px", height: "18px"}} src={require('./image/crown.jpg')} alt="crown" title="crown" /> : ""} {u.username}</Panel.Body>
        }
      )
    }
      </Panel>
      </div>
      </div>
    )
  }
}
