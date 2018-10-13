import React, { Component } from 'react';
import LoginForm from './loginform'





export default class Login extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: ''
      }
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
