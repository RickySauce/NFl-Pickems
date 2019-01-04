import React, { Component } from 'react';
import MatchupCard from './matchupCard'
import relativeTime from '../../../../../functions/relativeTime'
import Timer from './timer'
import moment from 'moment';

class GameTimeContainer extends Component {

  dateFormatter = (date) => {
    return relativeTime(date).format('ddd MM/DD/YYYY h:mma')
  }

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => {
      return <MatchupCard key={matchup.id} handleClick={this.props.handleClick} matchup={matchup}/>})
  }

  render(){
    return(
      <div>
      {this.dateFormatter(this.props.gameTime)} <Timer time={this.props.gameTime}/>
      {this.renderMatchupList()}
      </div>
    )
  }
}



export default GameTimeContainer
