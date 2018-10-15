import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions/signUp';
import RegistrationForm from './registrationform';

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
       } else {
       this.props.logIn(json);
     };
    });
   };

   renderErrors = () => {
     let liStyle = {
      color: 'red'
    };
    const errors = []
    if (this.state.errors !== []) {
      for (var el in this.state.errors){
        errors.push(`${el}: ${this.state.errors[el].join(', ')}`)
      }
      return (
        <div>
        {errors.map(el => <li style={liStyle}>{el}</li>)}
        <br/><br/>
        </div>
      )
    }
  }

    render() {
      console.log(this.props.user)
      return (
        <div>
           <RegistrationForm  handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
           {this.renderErrors()}
        </div>
      )
    }
  }


export default connect(null, {logIn})(Register);
