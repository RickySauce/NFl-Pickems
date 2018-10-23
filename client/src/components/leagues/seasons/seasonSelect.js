import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSeasonId} from '../../../actions/seasons/setSeasonId'

 class SeasonSelect extends Component {

   handleChange = (event) => {
    this.props.setSeasonId(event.target.value)
  }


render(){
  return(
    <select id="leagueSeasonId" onChange={this.handleChange}>
      {this.props.seasons.map(el =>{
        if (el.year === this.props.currentSeason.year){
          return <option key={el.id} value={el.id} defaultValue>{el.year}</option>
        } else {
          return <option key={el.id} value={el.id}>{el.year}</option>
        }
      })}
    </select>
  )
  }
}


export default connect(null, {setSeasonId})(SeasonSelect)
