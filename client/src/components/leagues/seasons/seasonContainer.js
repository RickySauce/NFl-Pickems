import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewSeason from './newSeason'
import SeasonSelect from './seasonSelect'
import {resetSeason} from '../../../actions/seasons/resetSeason'
import SeasonView from './seasonView'


 class SeasonContainer extends Component {

   state = {
     newSeasonAvailable: false
   }

   componentWillMount(){
     this.checkNewSeasonAvailability()
   }

   checkNewSeasonAvailability = () => {
     //if a league has no leagueSeasons, or if a the league does not have an instance of a season with
     // the current year, a new season will be available
     let season = this.props.leagueSeasons.find(season => {
       return season.year === new Date().getFullYear()
     })
     if (this.props.leagueSeasons.length === 0 || season === undefined){
       this.setState({newSeasonAvailable: true})
     }
   }

   componentWillUnmount(){
     this.props.resetSeason()
   }

  renderSeasonSelect = () => {
    if (this.props.loading === true && this.props.teams.loading === true){
      return "Seasons Loading"
    } else if (this.props.leagueSeasons.length > 0 && this.props.teams.loading === false){
        return <SeasonSelect seasons={this.props.leagueSeasons} teams={this.props.teams.teams} currentSeason={this.props.currentSeason}/>
    }
  }

  handleNewSeason = () => {
    this.setState({newSeasonAvailable: false})
  }

  renderNewSeason = () => {
    return this.state.newSeasonAvailable === true ? <NewSeason handleClick={this.handleNewSeason}/> : null
  }

  renderSeasonView = () => {
    if (this.props.seasonLoading === true){
      return "Current Season is Loading."
    } else if (this.props.seasonLoading === false){
      return <SeasonView season={this.props.season}/>
    }
  }

  render() {
    return (
      <div>
      {this.renderNewSeason()}
      {this.renderSeasonSelect()}
      {this.renderSeasonView()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    teams: state.teams,
    season: state.season.season.season,
    seasonLoading: state.season.season.loading,
    leagueSeasons: state.league.league.leagueSeasons,
    currentSeason: state.league.league.currentSeason,
    loading: state.season.loading
  }
}

export default connect(mapStateToProps,{resetSeason})(SeasonContainer)
