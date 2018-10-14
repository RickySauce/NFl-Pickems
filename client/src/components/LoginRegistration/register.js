import React, { Component } from 'react';
import RegistrationForm from './registrationform'

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
}

    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })

    }

    render() {
      return (
        <div>
           <RegistrationForm  handleChange={this.handleChange} />
        </div>
      )
    }
  }
