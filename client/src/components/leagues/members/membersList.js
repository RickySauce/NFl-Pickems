import React from 'react';
import { Panel } from 'react-bootstrap'
import MemberCard from './memberCard'

const MembersList = (props) => {


  const renderMembers = () => {
    return this.props.users.map(u => {
      return <Panel.Body key={u.id}><MemberCard user={u} ownerId={this.props.ownerId} owner={this.props.owner} removeUser={this.props.removeUser}/></Panel.Body>
    })
  }

    return(
      <div>
      {this.renderMembers()}
      </div>
    )

}

export default MembersList
