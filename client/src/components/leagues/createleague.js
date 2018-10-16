import React, { Component } from 'react';
import { Button } from 'react-bootstrap'



export default class LeagueForm extends Component {

  state = {
    count: 0,
    inputs: [],
    name: "",
    players: []
  }

  handleChange = (event) => {
    this.setState({players: [...this.state.players, event.target.name: event.target.value]})
    console.log(this.state)
  }

  handleClick = (event) => {
    let input = `<input type="text" />`
    switch (event.target.name) {
      case "decrease":
        if (this.state.count > 0) {
        return this.setState({count: this.state.count - 1, inputs: [...this.state.inputs.slice(0,-1)]})
      } else {return this.setState({count: 0})}
      case "increase":
        return this.setState({count: this.state.count + 1, inputs: [...this.state.inputs, <input onChange={this.handleChange} name={"Player" + (this.state.count + 1)} style={{display: "block"}}type='text' placeholder='Player Name'/>]})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <strong>Name of League</strong><br/><br/>
      <input type="text" name="name"/><br/><br/>
      <strong>Number of Players</strong>  <Button onClick={this.handleClick} name="decrease" bsSize="xsmall">-</Button><span>{this.state.count}</span><Button onClick={this.handleClick} name="increase" bsSize="xsmall">+</Button><br/><br/>
      {this.state.inputs.map(el => { return el })}
      <input type="submit" value="Create League"/>
      </form>
    )
  }

}
