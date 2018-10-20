import React from 'react';
import { Panel, Button, PageHeader, Col } from 'react-bootstrap'
import { connect } from 'react-redux';




export const RemoveUser = (props) => {
  if (props.owner){
    return <Button onClick={() => props.removeUser(props.id)} className="pull-right" bsStyle="danger" bsSize="xsmall" value={props.id}>x</Button>
  }else{
    return null
  }
}
