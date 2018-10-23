import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewSeason from './newSeason'
import SeasonSelect from './seasonSelect'
import {resetSeason} from '../../../actions/seasons/resetSeason'


 class SeasonContainer extends Component {

   state = {
     newSeasonAvailable: false
   }

   componentWillMount(){
     this.checkNewSeasonAvailability()
   }

   checkNewSeasonAvailability = () => {
     let season = this.props.leagueSeasons.find(season => {
       return season.year === new Date().getFullYear()
     })
     if (this.props.leagueSeasons.length === 0){
       this.setState({newSeasonAvailable: true})
     } else if (season === undefined){
         this.setState({newSeasonAvailable: true})
     }
   }

   componentWillUnmount(){
     this.props.resetSeason()
   }

  renderSeasonSelect = () => {
    if (this.props.loading === true){
      return "Seasons Loading"
    } else if (this.props.leagueSeasons.length > 0){
        return <SeasonSelect seasons={this.props.leagueSeasons} currentSeason={this.props.currentSeason}/>
    }
  }

  handleNewSeason = () => {
    this.setState({newSeasonAvailable: false})
  }

  renderNewSeason = () => {
    return this.state.newSeasonAvailable === true ? <NewSeason handleClick={this.handleNewSeason}/> : null
  }

  renderSeasonView = () => {
    return this.props.seasonLoading === true ? "Current Season is Loading." : "Season has loaded"
  }

  render() {
    console.log(this.props.season)
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
    season: state.season.season,
    seasonLoading: state.season.season.loading,
    leagueSeasons: state.league.league.leagueSeasons,
    currentSeason: state.league.league.currentSeason,
    loading: state.season.loading
  }
}

export default connect(mapStateToProps,{resetSeason})(SeasonContainer)
