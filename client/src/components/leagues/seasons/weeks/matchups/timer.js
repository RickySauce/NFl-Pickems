import React, { Component } from 'react';
import moment from 'moment'


export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.parse(new Date()),
      gameTime: Date.parse(this.props.time),
      difference: 0
    }
  }


  changeTime = () => {
    this.setState({difference: this.state.gameTime - Date.parse(new Date())})
  }

  countDown = duration => {
  var seconds = parseInt((duration / 1000) % 60),
     minutes = parseInt((duration / (1000 * 60)) % 60),
     hours = parseInt((duration / (1000 * 60 * 60)) % 24),
	   days = parseInt((duration / (1000 * 60 * 60 * 24)));
     hours = (hours < 10) ? "0" + hours : hours;
     minutes = (minutes < 10) ? "0" + minutes : minutes;
     seconds = (seconds < 10) ? "0" + seconds : seconds;
  return days + " DAYS " + hours + " HOURS " + minutes + " MINUTES " + seconds + " SECONDS UNTIL START"
}

  componentDidMount() {
    this.interval = setInterval(this.changeTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div style={{'fontSize': '8px'}}>{(this.state.gameTime - this.state.time) < 0 ? "EXPIRED" : this.countDown(this.state.difference)}</div>

    )
  }
}
