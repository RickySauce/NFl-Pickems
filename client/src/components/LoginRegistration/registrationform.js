import React from 'react';
import Errors from '../../error'

 const RegistrationForm = (props) => {

  return (
    <div>
     <form onSubmit={props.handleSubmit}>
     <input
     id="username"
     placeholder="Username"
     type="text"
     onChange={props.handleChange}/><br/>
     <Errors errors={props.errors["username"]}/>
     <input
     id="email"
     placeholder="Email"
     type="email"
     onChange={props.handleChange}/><br/>
     <Errors  errors={props.errors["email"]}/>
     <input
     id="password"
     placeholder="Password"
     type="password"
     onChange={props.handleChange}/><br/>
     <Errors  errors={props.errors["password"]}/>
     <input
     id="password_confirmation"
     placeholder="Password Confirmation"
     type="password"
     onChange={props.handleChange}/><br/>
     <Errors  errors={props.errors["passwordConfirmation"]}/>
     <input type="submit" value="Register"/>
     </form>
   </div>
  )
}

export default RegistrationForm;
