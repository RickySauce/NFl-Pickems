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
    this.interval = setInterval(this.changeTime, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render () {
    return (
      <div>{this.state.time}</div>
    )
  }
}
