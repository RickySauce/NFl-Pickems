import React, { Component } from 'react';
import MatchupCard from './matchupCard'
import relativeTime from '../../../../../functions/relativeTime'
import Timer from './timer'
import moment from 'moment';

class GameTimeContainer extends Component {

  state = {
    locked: null
  }

  componentDidMount() {
    this.interval = setInterval(this.lockMatchups, 1000)
    this.lockMatchups()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  lockMatchups = () => {
    if (this.state.locked == false && new Date > new Date(this.props.gameTime)){
      this.setState({locked: true})
    }
  }

  dateFormatter = (date) => {
    return relativeTime(date).format('ddd MM/DD/YYYY h:mma')
  }

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => {
      return <MatchupCard key={matchup.id} handleClick={this.props.handleClick} matchup={matchup} locked={this.state.locked}/>})
  }

  render(){
    return(
      <div>
      {console.log(this.state)}
      {this.dateFormatter(this.props.gameTime)} <Timer time={this.props.gameTime}/>
      {this.renderMatchupList()}
      </div>
    )
  }
}



export default GameTimeContainer
