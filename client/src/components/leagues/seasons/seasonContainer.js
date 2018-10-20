import React, { Component } from 'react';
import NewSeason from './newSeason'


 class SeasonContainer extends Component {

  state = {
    currentSeason: this.props.currentSeason,
    leagueId: this.props.leagueId
  }

  renderCurrentSeason = () => {

  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default SeasonContainer
