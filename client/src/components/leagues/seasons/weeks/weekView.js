import React, { Component } from 'react';
import MatchupList from './matchups/matchupList'
import relativeTime from '../../../../functions/relativeTime'
import moment from 'moment';



class WeekView extends Component {

  renderMatchupList = () => {
    if (this.props.picksLoading === true){
      return "Please wait for user information to load"
    } else if (this.props.picksLoading === false){
      return <MatchupList matchups={this.props.week.matchups} weekId={this.props.week.id}/>
    }
  }

  renderDate = (dt) => {
    let day = relativeTime(dt).format('ddd MM-DD-YYYY')
    return day
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


export default WeekView
