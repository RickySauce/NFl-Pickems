import React from 'react';


const LoginForm = ({handleChange, handleSubmit}) => {

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
