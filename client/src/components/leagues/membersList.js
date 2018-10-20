import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import MemberCard from './memberCard'

class MembersList extends Component {


  renderMembers = () => {
    return this.props.users.map(u => {
      return <Panel.Body key={u.id}><MemberCard user={u} ownerId={this.props.ownerId} owner={this.props.owner} removeUser={this.props.removeUser}/></Panel.Body>
    })
  }

  render(){
    return(
      <div>
      {this.renderMembers()}
      </div>
    )
  }

}

export default MembersList
