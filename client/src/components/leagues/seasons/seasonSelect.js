import React, { Component } from 'react';
import { connect } from 'react-redux';


 class SeasonSelect extends Component {

   handleChange = (event) => {
  }


render(){
  return(
    <div>
    <select id="leagueSeasonId" onChange={this.handleChange}>
      {this.props.seasons.map(el =>{
        if (el.year === this.props.currentSeason.year){
          return <option key={el.id} value={el.id} defaultValue>{el.year}</option>
        } else {
          return <option key={el.id} value={el.id}>{el.year}</option>
        }
      })}
    </select>
    </div>
  )
  }
}


export default connect(null)(SeasonSelect)
