import React from 'react';


 const RegistrationForm = ({handleChange, handleSubmit}) => {

  return (
    <div>
     <form onSubmit={handleSubmit}>
     <input
     id="username"
     placeholder="Username"
     type="text"
     onChange={handleChange}/><br/>
     <input
     id="email"
     placeholder="Email"
     type="email"
     onChange={handleChange}/><br/>
     <input
     id="password"
     placeholder="Password"
     type="password"
     onChange={handleChange}/><br/>
     <input
     id="password_confirmation"
     placeholder="Password Confirmation"
     type="password"
     onChange={handleChange}/><br/>
     <input type="submit" value="Register"/>
     </form>
   </div>
  )
}

export default RegistrationForm
