import React, { Component } from 'react';
import Team from './team'

class MatchupCard extends Component {

state = {
  home: {side: "home", picked: false},
  away: {side: "away", picked: false}
}

handleClick = (event) => {
  for (var el in this.state){
    this.setState({[el]: {...this.state[el], picked: false}})
  }
  this.setState({[event.target.dataset.side]: {...this.state[event.target.dataset.side], picked: true}})
}

  render(){
    console.log(this.state)
    return(
      <ul>
      <Team team={this.props.matchup.homeTeam} side={this.state.home} handleClick={this.handleClick}/> vs. <Team team={this.props.matchup.awayTeam} side={this.state.away} handleClick={this.handleClick}/>
      </ul>
    )
  }
}

export default MatchupCard
