import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSeason} from '../../../actions/seasons/fetchSeason'


 class SeasonSelect extends Component {

   handleChange = (event) => {
  }

  componentWillMount(){
    this.props.fetchSeason(this.seasonsSorted()[0].id)
  }

  seasonsSorted = () => {
    return this.props.seasons.sort(function(a, b){return b.year - a.year});
  }

render(){
  return(
    <div>
    <select id="leagueSeasonId" onChange={this.handleChange}>
      {this.seasonsSorted().map(el =>{
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


export default connect(null,{fetchSeason})(SeasonSelect)
