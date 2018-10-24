import React, { Component } from 'react';
import Matchup from './matchup'

class MatchupList extends Component {

  renderMatchupList = () => {
    return this.props.matchups.map(matchup => <Matchup matchup={matchup}/>)
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
