import React, { Component } from 'react';
import MatchupList from './matchups/matchupList'



class WeekView extends Component {

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


export default WeekView
