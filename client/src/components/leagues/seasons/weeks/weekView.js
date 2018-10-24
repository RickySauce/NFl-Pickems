import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatchupList from './matchups/matchupList'
import { loadWeeklyPicks } from '../../../../actions/seasons/weeks/loadWeeklyPicks'

class WeekView extends Component {

componentWillMount(){

}

  render(){
    return(
      <div>
      currently viewing week # {this.props.week.weekNumber}
      <MatchupList matchups={this.props.week.matchups} weekId={this.props.week.id}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    userId: state.user.user.id,
    leagueSeasonId: state.season.season.id
  }
}

export default connect(mapStateToProps)(WeekView)
