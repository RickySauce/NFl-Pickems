import React from 'react';

const Team = (props) => {

const style = props.side.picked === true ? {border: '1px solid black'} : null

  return(
    <span onClick={props.handleClick} data-side={props.side.side} data-id={props.team.id} style={style}>
    {props.team.name}
    </span>
  )
}

export default Team
