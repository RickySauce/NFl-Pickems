import React from 'react';

const Team = (props) => {

const style = props.side.picked === true ? {border: '1px solid black'} : null

  return(
    <span onClick={props.handleClick} data-side={props.side.side} data-id={props.team.id} style={style}>

      <img style={{width: "100px", height: "75px"}} src={require(`../../../../../team logos/${props.team.id}.gif`)} alt="logo" title="logo" />
      

    </span>
  )
}

export default Team
// <img style={{width: "18px", height: "18px"}} src={require('../image/crown.jpg')} alt="crown" title="crown" />
