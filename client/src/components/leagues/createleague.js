import React, { Component } from 'react';
import { Button } from 'react-bootstrap'



export default class LeagueForm extends Component {

  state = {
    count: 0,
    inputs: [],
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
        return this.setState({count: this.state.count + 1, inputs: [...this.state.inputs, player]})
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


  render() {
    console.log(this.state)
    return (
      <form>
      <strong>Name of League</strong><br/><br/>
      <input type="text" name="name"/><br/><br/>
      <strong>Number of Players</strong>  <Button onClick={this.handleClick} name="decrease" bsSize="xsmall">-</Button><span>{this.state.count}</span><Button onClick={this.handleClick} name="increase" bsSize="xsmall">+</Button><br/><br/>
      {this.state.inputs.map(el => {
        return <input id={Object.keys(el)} onChange={this.handleChange} style={{display: "block"}}type='text' placeholder='Player Name'/>
      })}
      <input type="submit" value="Create League"/>
      </form>
    )
  }

}
