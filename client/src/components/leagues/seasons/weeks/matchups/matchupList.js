import React, { Component } from 'react';
import MatchupCard from './matchupCard'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class MatchupList extends Component {

  state = {
    userPicks: []
  }

  handleClick = (matchupId, teamId) => {
    if (this.state.userPicks.find(userPick => userPick.matchupId === matchupId)){
      let index = this.state.userPicks.findIndex(userPick => userPick.matchupId === matchupId)
      console.log(index)
      let newArray = this.state.userPicks
      newArray[index] = {user_pick: {matchup_id: matchupId, team_id: teamId}}
      this.setState({userPicks: newArray})
    } else {
      this.setState({userPicks: [...this.state.userPicks, {user_pick: {matchup_id: matchupId, team_id: teamId}}]})
    }
  }

  handleSubmit = () => {
    let data = JSON.stringify({user_picks: this.state.userPicks})
      fetch('/api/users/picks/submit', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: data
    })
  }

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => <MatchupCard key={matchup.id} handelClick={this.handleClick} matchup={matchup}/>)
  }

  renderSubmit = () => {
    return <Button onClick={this.handleSubmit}>Submit Picks</Button>
  }

  render(){
    return(
      <div>
      {this.renderMatchupList()}
      {this.renderSubmit()}
      </div>
    )
  }
}

export default MatchupList
