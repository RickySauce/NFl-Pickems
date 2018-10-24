import React, { Component } from 'react';
import Team from './team'

class MatchupCard extends Component {


  render(){
    return(
      <ul>
      <Team team={this.props.matchup.homeTeam}/> vs. <Team team={this.props.matchup.awayTeam}/>
      </ul>
    )
  }
}

export default MatchupCard
