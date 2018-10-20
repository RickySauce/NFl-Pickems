import React from 'react';
import { Panel } from 'react-bootstrap'
import MemberCard from './memberCard'

const MembersList = (props) => {


  const renderMembers = () => {
    return props.users.map(u => {
      return <Panel.Body key={u.id}><MemberCard user={u} ownerId={props.ownerId} owner={props.owner} removeUser={props.removeUser}/></Panel.Body>
    })
  }

    return(
      <div>
      {renderMembers()}
      </div>
    )

}

export default MembersList
