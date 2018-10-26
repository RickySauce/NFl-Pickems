import React from 'react';

const Team = (props) => {

const style = props.side.picked === true ?"3px solid #41cc2e" : null

  return(
    <span>
      <img onClick={props.handleClick}  data-side={props.side.side} data-id={props.team.id}
      style={{width: "100px", height: "75px", border: style}} src={require(`../../../../../team logos/${props.team.abrv}.gif`)}
      alt="logo" title="logo" />
    </span>
  )
}

export default Team
// <img style={{width: "18px", height: "18px"}} src={require('../image/crown.jpg')} alt="crown" title="crown" />
