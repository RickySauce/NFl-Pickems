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

    handleSubmit = (event) => {
     event.preventDefault()
     fetch('/api/users', {
       headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
     },
       method: "POST",
       body: JSON.stringify({user: this.state})
     })
     .then(resp => resp.json())
     .then(json => this.props.logIn(json))
     .catch(error => this.props.message("Invalid Username Or Password"))

    }

    render() {
      return (
        <div>
           <LoginForm  handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      )
    }
  }

export default Login
