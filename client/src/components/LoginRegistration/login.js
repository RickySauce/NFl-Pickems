import React, { Component } from 'react';
import { logIn } from '../../actions/users/logIn';
import { connect } from 'react-redux';
import ProfileContainer from '../user/profileContainer'
import LoginForm from './loginform'

class Login extends Component {
  state = {
        message: '',
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
     fetch('/api/login', {
       headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
     },
       method: "POST",
       body: JSON.stringify({user: this.state})
     })
     .then(resp => resp.json())
     .then(json => {
       const message = json.message;
       if (message !== undefined){
         this.setState({message: message});
       } else {
       this.props.logIn(json);
       }
     });
    }

    renderComponent = () => {
      return this.props.user === "" ? <LoginForm errors={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> : <ProfileContainer/>
    }

    render() {
      return (
        <div>
          {this.renderComponent()}
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return  {
      user: state.user.user
    }
  }

export default connect(mapStateToProps, {logIn})(Login);
