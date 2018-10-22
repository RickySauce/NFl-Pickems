import React, { Component } from 'react';
import NewSeason from './newSeason'


 class SeasonContainer extends Component {

  renderCurrentSeason = () => {
    return this.props.currentSeason === null ? <NewSeason/> : <NewSeason/>
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
