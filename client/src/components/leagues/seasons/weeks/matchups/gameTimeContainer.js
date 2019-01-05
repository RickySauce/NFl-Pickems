import React, { Component } from 'react';
import { connect } from 'react-redux'
import MatchupCard from './matchupCard'
import relativeTime from '../../../../../functions/relativeTime'
import Timer from './timer'
import moment from 'moment';
import { lockMatchups } from '../../../../../actions/seasons/weeks/matchups/lockMatchups'

class GameTimeContainer extends Component {

  componentDidMount() {
    this.interval = setInterval(this.lockMatchups, 1000)
    this.lockMatchups()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  lockMatchups = () => {
    if (this.props.matchups.some(matchup => matchup.locked === false) && new Date > new Date(this.props.gameTime)){
      this.props.lockMatchups(this.props.gameTime, this.props.weekId)
    }
  }

  dateFormatter = (date) => {
    return relativeTime(date).format('ddd MM/DD/YYYY h:mma')
  }

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => {
      return <MatchupCard key={matchup.id} handleClick={this.props.handleClick} matchup={matchup} locked={matchup.locked}/>})
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



export default connect(null, { lockMatchups })(GameTimeContainer)
