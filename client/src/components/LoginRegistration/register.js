import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions/logIn';
import Profile from '../user/profile'
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

  renderComponent = () => {
    return this.props.user === "" ? <RegistrationForm  handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> : <Profile/>
  }

    render() {
      return (
        <div>
           {this.renderComponent()}
           {this.renderErrors()}
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return  {
      user: state.user.user
    }
  }

export default connect(mapStateToProps, {logIn})(Register);
