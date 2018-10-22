import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewSeason from './newSeason'
import SeasonSelect from './seasonSelect'


 class SeasonContainer extends Component {

  renderSeasonOptions = () => {
    return this.props.currentSeason === null && this.props.loading === false  ? <NewSeason/> : <SeasonSelect seasons={this.props.leagueSeasons}/>
  }

  renderSeasonView = () => {
    return this.props.currentSeason !== null && this.props.loading === false  ? "HAPPY DAYS" : null
  }

  render() {
    console.log(this.props.currentSeason)
    console.log(this.props.loading)
    return (
      <div>
      {this.renderSeasonOptions()}
      {this.renderSeasonView()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    leagueSeasons: state.league.league.leagueSeasons,
    currentSeason: state.league.league.currentSeason,
    loading: state.season.loading
  }
}

export default connect(mapStateToProps)(SeasonContainer)
