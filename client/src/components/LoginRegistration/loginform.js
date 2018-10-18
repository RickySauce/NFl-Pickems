import React from 'react';
import Errors from '../../error'


const LoginForm = (props) => {

  return (
    <div>
    <form onSubmit={props.handleSubmit}>
      <input type="text" id="username" placeholder="Username" onChange={props.handleChange} /> <br />
      <Errors errors={props.errors["username"]}/>
      <input type="password" id="password" placeholder="Password" onChange={props.handleChange} /> <br />
      <Errors errors={props.errors["password"]}/>
      <input type="submit" value="Log In"  />
    </form>
    </div>
  )
}

export default LoginForm
