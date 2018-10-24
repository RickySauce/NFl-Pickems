import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import WeekView from './weekView'
import { loadWeeklyPicks } from '../../../../actions/seasons/weeks/loadWeeklyPicks'

class WeekList extends Component {

  state = {
    week: this.props.currentWeek
  }

  componentWillMount(){
    console.log(this.state)
    this.props.loadWeeklyPicks(this.props.userId, this.state.week.id, this.props.leagueSeasonId)
  }


  handleClick = (event) => {
    event.preventDefault()
    this.setState({week: this.props.weeks.find(week => week.id === parseInt(event.target.dataset.id))})
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
      <WeekView week={this.state.week} picksLoading={this.props.picksLoading}/>
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


export default connect(mapStateToProps,{loadWeeklyPicks})(WeekList)
