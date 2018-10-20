import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom';
import { newLeague } from '../../actions/users/newleague';


class LeagueForm extends Component {

  state = {
    count: 0,
    inputs: [],
    name: '',
    owner_id: this.props.user.id,
    redirect: false
  }

  handleClick = (event) => {
    let input = `<input type="text" />`
    switch (event.target.name) {
      case "decrease":
        if (this.state.count > 0) {
        return this.setState({count: this.state.count - 1, inputs: [...this.state.inputs.slice(0,-1)]})
      } else {return this.setState({count: 0})}
      case "increase":
      let count = this.state.count + 1;
        let playerName = `player${count}`
        let player = {[playerName]: ""};
        return this.setState({count: count, inputs: [...this.state.inputs, player]})
    }
  }

  handleChange = (event) => {
    let index = this.state.inputs.findIndex(el => {
      return Object.keys(el)[0] === event.target.id
    })
    let inputsCopy = this.state.inputs
    inputsCopy[index] = {[event.target.id]: event.target.value}
    this.setState({
      inputs:[...inputsCopy]
    })
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch('/api/leagues/new', {
      headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
    },
      method: "POST",
      body: JSON.stringify({league: this.state})
    }
  )
  .then(res => res.json())
  .then(json => {
    console.log(json);
    this.props.newLeague(json);
    this.setState({redirect: true});

  }
)
}


  render() {
    if (this.state.redirect) {
      return <Redirect to='/profile'/>
    }
    return (
      <form onSubmit={this.handleSubmit}>
      <strong>Name of League</strong><br/><br/>
      <input onChange={this.handleNameChange} type="text" name="name"/><br/><br/>
      <strong>Number of Players</strong>  <Button onClick={this.handleClick} name="decrease" bsSize="xsmall">-</Button><span>{this.state.count}</span><Button onClick={this.handleClick} name="increase" bsSize="xsmall">+</Button><br/><br/>
      {this.state.inputs.map(el => {
        return <input id={Object.keys(el)} onChange={this.handleChange} style={{display: "block"}}type='text' placeholder='Player Name'/>
      })}
      <input type="submit" value="Create League"/>
      </form>
    )
  }
}


const mapStateToProps = (state) => {
  return  {
    user: state.user.user,
    auth: state.authenticated
  }
}



export default connect(mapStateToProps, {newLeague})(LeagueForm)
