import React, { Component } from 'react';
import moment from 'moment'


export default class Timer extends Component {
  state = {
    time: Date.parse(new Date())
  }

  changeTime = () => {
    this.setState({time: this.state.time - 1000})
  }

  componentDidMount() {
    setInterval(
      this.changeTime(), 1000)

  }

  render () {
    return (
      <div>{this.state.time}</div>
    )
  }
}
