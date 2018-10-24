import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WeekView from './weekView'

class WeekList extends Component {

  state = {
    week: this.props.currentWeek
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
      <WeekView week={this.state.week}/>
      </div>
    )
  }
}

export default WeekList
