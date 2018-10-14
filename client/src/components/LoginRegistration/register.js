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

    handleSubmit = (event) => {
     event.preventDefault()
     let data = JSON.stringify({user: this.state})
       fetch('/api/register', {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: data
     })
     .then(res => res.json())
     .catch(json => {
       debugger;
     })
   };

    render() {
      console.log(this.state)
      return (
        <div>
           <RegistrationForm  handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      )
    }
  }

export default Register
