import React from 'react';
// import { Panel, Button, PageHeader, Col } from 'react-bootstrap'
import RemoveUser from './removeUser'
import { connect } from 'react-redux';

const MemberCard = (props) => {

const renderCrown = () => {
  return props.user.id === props.ownerId ? <img style={{width: "18px", height: "18px"}} src={require('../image/crown.jpg')} alt="crown" title="crown" /> : null
}

const renderRemove = () => {
  return props.user.id !== props.ownerId ? <RemoveUser id={props.user.id} /> :null
}

    return(
      <div>
      {renderCrown()}{props.user.username}{renderRemove()}
      </div>
    )
}


const mapStateToProps = (state) => {
  return  {
    ownerId: state.league.league.ownerId
  }
}

export default connect(mapStateToProps)(MemberCard)
