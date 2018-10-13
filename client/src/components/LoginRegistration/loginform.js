import React, { Component } from 'react';


export default class LoginForm extends Component {
  render() {
    return (
      <div>
      <form>
        <input type="text" id="username" placeholder="Username" onChange={this.props.handleChange} /> <br />
        <input type="password" id="password" placeholder="Password" onChange={this.props.handleChange} /> <br />
        <input type="submit" value="Log In"  />
      </form>
      </div>
    )
  }
}
