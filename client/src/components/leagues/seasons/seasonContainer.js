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

   }

   checkNewSeasonAvailability = () => {

   }

   componentWillUnmount(){
     this.props.resetSeason()
   }

  renderSeasonSelect = () => {
    if (this.props.loading === true){
      return "Seasons Loading"
    } else {
      if (this.props.leagueSeasons.length > 0){
        return <SeasonSelect seasons={this.props.leagueSeasons} currentSeason={this.props.currentSeason}/>
      } else {
        return
      }
    }
  }

  renderSeasonView = () => {
    if (this.props.loading === true){
      return null
    } else {
      if (this.props.seasonId !== undefined){
        return "HAPPY DAYS"
      } else {
        return "SAD DAYS"
      }
    }
  }

  render() {
    console.log(this.props.leagueSeasons)
    return (
      <div>
      {this.renderSeasonSelect()}
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

export default connect(mapStateToProps,{resetSeason})(SeasonContainer)
