import React, { Component } from 'react';
import Team from './team'
import moment from 'moment'
class MatchupCard extends Component {

state = {
  home: {side: "home", picked: false},
  away: {side: "away", picked: false}
}

dateFormatter = (date) => {
  return moment(date).format('MM/DD/YYYY h:mma')
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
    {console.log(this.props.matchup)}
    return(

      <ul>
      <Team team={this.props.matchup.homeTeam} side={this.state.home} handleClick={this.handleClick}/>   vs.  <Team team={this.props.matchup.awayTeam} side={this.state.away} handleClick={this.handleClick}/> <br/><br/>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.matchup.homeTeam.name}(Home)  &nbsp;<strong>{this.dateFormatter(this.props.matchup.gameDateTime)}</strong>&nbsp;{this.props.matchup.awayTeam.name}(Away)</span>
      </ul>
    )
  }
}

export default MatchupCard
