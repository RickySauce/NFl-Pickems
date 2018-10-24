import React, { Component } from 'react';
import WeekList from './weeks/weekList'

 class SeasonView extends Component {

  render(){
    return (
      <div>
      NFL REGULAR SEASON SCHEDULE {this.props.season.year}
        <WeekList weeks={this.props.season.weeks} currentWeek={this.props.season.currentWeek}/>
      </div>
    )
  }
}

export default SeasonView
