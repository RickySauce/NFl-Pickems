import React, { Component } from 'react';
import NewSeason from './newSeason'


 class SeasonContainer extends Component {

  state = {
    currentSeason: this.props.currentSeason,
    leagueId: this.props.leagueId
  }

  renderCurrentSeason = () => {
    return this.state.currentSeason === null ? <NewSeason/> : "bye"
  }

  render() {
    return (
      <div>
      {this.renderCurrentSeason()}
      </div>
    )
  }
}

export default SeasonContainer
