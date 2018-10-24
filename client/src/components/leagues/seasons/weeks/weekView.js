import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatchupList from './matchups/matchupList'
import { loadWeeklyPicks } from '../../../../actions/seasons/weeks/loadWeeklyPicks'

class WeekView extends Component {

  componentWillMount(){
    this.props.loadWeeklyPicks(this.props.userId, this.props.week.id, this.props.leagueSeasonId)
  }

  renderMatchupList = () => {
    if (this.props.picksLoading === true){
      return "Please wait for user information to load"
    } else if (this.props.picksLoading === false){
      return <MatchupList matchups={this.props.week.matchups} weekId={this.props.week.id}/>
    }
  }

  render(){
    return(
      <div>
      currently viewing week # {this.props.week.weekNumber}
      {this.renderMatchupList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    userId: state.user.user.id,
    picksLoading: state.userPicks.loading,
    leagueSeasonId: state.season.season.id
  }
}

export default connect(mapStateToProps,{loadWeeklyPicks})(WeekView)
