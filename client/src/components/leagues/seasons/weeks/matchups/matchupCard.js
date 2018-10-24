import React, { Component } from 'react';
import Team from './team'

class MatchupCard extends Component {

state = {
  home: {side: "home", picked: false},
  away: {side: "away", picked: false}
}

handleClick = (event) => {
  let team = event.target.dataset.side
  let teamId = event.target.dataset.id
  for (var el in this.state){
    this.setState({[el]: {...this.state[el], picked: false}})
  }
  this.setState({[team]: {...this.state[team], picked: true}})
  this.props.handelClick(this.props.matchup.id, teamId)
}

  render(){
    return(
      <ul>
      <Team team={this.props.matchup.homeTeam} side={this.state.home} handleClick={this.handleClick}/> vs. <Team team={this.props.matchup.awayTeam} side={this.state.away} handleClick={this.handleClick}/>
      </ul>
    )
  }
}

export default MatchupCard
