import React from 'react';
import ReactDOM from 'react-dom';


const Errors = (props) => {

const renderErrors = () => {
  let liStyle = {
   color: 'red'
 };
  if (props.errors !== undefined){
    return props.errors.map(el => <li style={liStyle}>{el}</li>)
  }
}

  return(
    <div>
    {renderErrors()}
    </div>
  )
}

export default Errors;
