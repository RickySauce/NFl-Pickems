import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import WeekView from './weekView'
import { loadWeeklyPicks } from '../../../../actions/seasons/weeks/loadWeeklyPicks'
import { updateCurrentWeek } from '../../../../actions/seasons/weeks/updateCurrentWeek'
import { changeCurrentWeek } from '../../../../actions/seasons/weeks/changeCurrentWeek'

class WeekList extends Component {

  componentDidMount(){
    this.props.loadWeeklyPicks(this.props.userId, this.props.currentWeek.id, this.props.leagueSeasonId)
  }

  checkResults = () =>{
    if (this.props.currentWeek.gamesCompleted === false || this.props.currentWeek.locked === false) {
      this.props.updateCurrentWeek(this.props.currentWeek)
    }
  }


  handleClick = (event) => {
    // dispatch week clicked to store, set currentWeek = to that instance
    // will loadWeeklyPicks throw error if currentWeek isn't loaded before loadWeeklyPicks is fired?
    event.preventDefault()
    this.props.changeCurrentWeek(event.target.dataset.id)
    this.props.loadWeeklyPicks(this.props.userId, event.target.dataset.id, this.props.leagueSeasonId)
  }

  renderWeekList = () => {
    return this.props.weeks.map(week => {
      return   <span key={week.id}><Link className="weekLink"  to='' onClick={this.handleClick} data-id={week.id}>{week.weekNumber}</Link> | </span>
    })
  }

  render(){
    return(
      <div>
      {this.renderWeekList()}
      {console.log(this.props)}
      <WeekView week={this.props.currentWeek} picksLoading={this.props.picksLoading}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    currentWeek: state.season.season.season.currentWeek,
    userId: state.user.user.id,
    picksLoading: state.userPicks.loading,
    leagueSeasonId: state.season.season.id
  }
}


export default connect(mapStateToProps,{loadWeeklyPicks, updateCurrentWeek, changeCurrentWeek})(WeekList)
