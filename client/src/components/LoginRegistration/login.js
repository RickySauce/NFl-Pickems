import React, { Component } from 'react';
import LoginForm from './loginform'

class Login extends Component {
  state = {
        username: '',
        password: ''
      }

    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })

    }

    render() {
      return (
        <div>
           <LoginForm  handleChange={this.handleChange} />
        </div>
      )
    }
  }

export default Login
