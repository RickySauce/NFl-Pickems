import React, { Component } from 'react';
import Team from './team'
import { Panel, Col } from 'react-bootstrap';
import relativeTime from '../../../../../functions/relativeTime'
import Timer from './timer'
import '../../../../../css/matchups.css'

class MatchupCard extends Component {

state = {
  home: {side: "home", picked: this.props.pick === "home" ? true : false},
  away: {side: "away", picked: this.props.pick === "away" ? true : false}
}

dateFormatter = (date) => {
  return relativeTime(date).format('ddd MM/DD/YYYY h:mma')
}

handleClick = (event) => {
  if (this.props.matchup.locked === false){
    let team = event.target.dataset.side
    let teamId = event.target.dataset.id
    let newState = {}
    for (var el in this.state){
      if (el === team){
        newState[team] = {...this.state[team], picked: true}
      } else {
        newState[el] = {...this.state[el], picked: false}
      }
    }
    this.setState({...newState})
    this.props.handleClick(this.props.matchup.id, teamId)
  }
}


  render(){
    console.log(this.props.matchup.locked, this.props.matchup.homeTeam.name, this.props.matchup.awayTeam.name)
    return(
      <Panel className='matchup-card'>
        <Panel.Heading style={{'fontSize': "16px", 'fontWeight': 'bold'}}> <Col xs={4}><strong>{this.props.matchup.homeTeam.name}</strong></Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{this.props.matchup.awayTeam.name}</strong></Panel.Heading>
        <Panel.Body><Team team={this.props.matchup.homeTeam} side={this.state.home} handleClick={this.handleClick}/>   <strong>vs.</strong>  <Team team={this.props.matchup.awayTeam} side={this.state.away} handleClick={this.handleClick}/> <br/><br/>
        </Panel.Body>
      </Panel>
    )
  }
}

export default MatchupCard


// function countDown(gameDate) {
//   let gameParsed = Date.parse(gameDate)
//   let current = new Date()
//   let currentParsed = Date.parse(current)
//   let difference = gameParsed - currentParsed
// }
