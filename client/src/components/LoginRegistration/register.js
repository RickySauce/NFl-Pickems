import React, { Component } from 'react';
import RegistrationForm from './registrationform'

 class Register extends Component {
  state = {
    errors: [],
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
     .then(json => {
      const errors = json.errors
      if (errors !== undefined){
        this.setState({errors});
      } 
    });
   };

   renderErrors = () => {
    const errors = []
    if (this.state.errors != false) {
      for (var el in this.state.errors){
        errors.push(`${el}: ${this.state.errors[el].join(', ')}`)
      }
      return (
        <div>
        The following errors prevented the creation of the account:
        <br/><br/>
        {errors.map(el => <li>{el}</li>)}
        <br/><br/>
        </div>
      )
    }
  }

    render() {
      return (
        <div>
        {this.renderErrors()}
           <RegistrationForm  handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      )
    }
  }

export default Register
