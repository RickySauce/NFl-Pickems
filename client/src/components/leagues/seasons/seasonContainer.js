import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewSeason from './newSeason'
import SeasonSelect from './seasonSelect'
import {setSeasonId} from '../../../actions/seasons/setSeasonId'


 class SeasonContainer extends Component {

  renderSeasonOptions = () => {
    return this.props.currentSeason === null && this.props.loading === false  ? <NewSeason/> : <SeasonSelect seasons={this.props.leagueSeasons} currentSeason={this.props.currentSeason}/>
  }

  renderSeasonView = () => {
    return this.props.seasonId !== undefined && this.props.loading === false  ? "HAPPY DAYS" : null
  }

  render() {
    console.log(this.props.seasonId)
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
    seasonId: state.season.season.id,
    leagueSeasons: state.league.league.leagueSeasons,
    currentSeason: state.league.league.currentSeason,
    loading: state.season.loading
  }
}

export default connect(mapStateToProps,{setSeasonId})(SeasonContainer)
