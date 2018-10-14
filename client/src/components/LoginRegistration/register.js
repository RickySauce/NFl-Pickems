import React, { Component } from 'react';
import RegistrationForm from './registrationform'

 class Register extends Component {
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
      console.log(this.state)
      return (
        <div>
           <RegistrationForm  handleChange={this.handleChange} />
        </div>
      )
    }
  }

export default Register
