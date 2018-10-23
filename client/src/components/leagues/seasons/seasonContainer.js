import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewSeason from './newSeason'
import SeasonSelect from './seasonSelect'
import {setSeasonId} from '../../../actions/seasons/setSeasonId'
import {resetSeason} from '../../../actions/seasons/resetSeason'


 class SeasonContainer extends Component {

   componentWillUnmount(){
     this.props.resetSeason()
   }

  renderSeasonOptions = () => {
    if (this.props.loading === true){
      return null
    } else {
      if (this.props.currentSeason === null){
        return <NewSeason/>
      } else {
        return <SeasonSelect seasons={this.props.leagueSeasons} currentSeason={this.props.currentSeason}/>
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

export default connect(mapStateToProps,{setSeasonId, resetSeason})(SeasonContainer)
