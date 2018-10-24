import React from 'react';

const Team = (props) => {


  return(
    <span onClick={props.handleClick} data-side={props.side.side}>
    {props.team.name}
    </span>
  )
}

export default Team
