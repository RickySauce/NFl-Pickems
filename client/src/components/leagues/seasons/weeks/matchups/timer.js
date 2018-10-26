import React, { Component } from 'react';
import moment from 'moment'


export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.parse(new Date()),
      gameTime: Date.parse(this.props.time)
    }
  }


  changeTime = () => {
    this.setState({time: this.state.time - 1000})
  }

  componentDidMount() {
    setInterval(
    this.changeTime, 1000)
    this.interval = setInterval(this.changeTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>{moment.duration(moment(new Date(this.state.gameTime), 'YYYY/MM/DD HH:mm').diff(moment(new Date(this.state.time), 'YYYY/MM/DD HH:mm'))).asHours()}</div>

    )
  }
}
