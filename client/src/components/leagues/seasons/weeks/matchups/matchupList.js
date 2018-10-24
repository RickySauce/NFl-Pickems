import React, { Component } from 'react';
import MatchupCard from './matchupCard'

class MatchupList extends Component {

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => <MatchupCard key={matchup.id} matchup={matchup}/>)
  }

  render(){
    return(
      <div>
      {this.renderMatchupList()}
      </div>
    )
  }
}

export default MatchupList
