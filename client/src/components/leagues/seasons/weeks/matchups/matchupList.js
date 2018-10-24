import React, { Component } from 'react';
import MatchupCard from './matchupCard'

class MatchupList extends Component {

  state = {
    matchups: []
  }

  handleClick = (id, teamId) => {
    if (this.state.matchups.find(matchup => matchup.id === id)){
      let index = this.state.matchups.findIndex(matchup => matchup.id === id)
      console.log(index)
      let newArray = this.state.matchups
      newArray[index] = {id: id, team_id: teamId}
      this.setState({matchups: newArray})
    } else {
      this.setState({matchups: [...this.state.matchups, {id: id, team_id: teamId}]})
    }
  }

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => <MatchupCard key={matchup.id} handelClick={this.handleClick} matchup={matchup}/>)
  }

  render(){
    console.log(this.state)
    return(
      <div>
      {this.renderMatchupList()}
      </div>
    )
  }
}

export default MatchupList
