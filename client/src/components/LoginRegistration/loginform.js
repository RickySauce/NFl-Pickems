import React from 'react';


<<<<<<< HEAD
const LoginForm = ({handleChange},{handleSubmit}) => {
=======
const LoginForm = ({handleChange, handleSubmit}) => {
>>>>>>> 1d634d1e12fc9da404a85a7f1a2a88ec9fd50740

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" id="username" placeholder="Username" onChange={handleChange} /> <br />
      <input type="password" id="password" placeholder="Password" onChange={handleChange} /> <br />
      <input type="submit" value="Log In"  />
    </form>
    </div>
  )
}

export default LoginForm
