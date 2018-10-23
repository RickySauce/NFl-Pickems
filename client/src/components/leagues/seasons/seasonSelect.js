import React from 'react';




const SeasonSelect = (props) => {

  return(
    <select id="leagueSeasonId" onChange={props.handleChange}>
      {props.seasons.map(el =>{
        if (el.year === props.currentSeason.year){
          return <option value={el.id} selected>{el.year}</option>
        } else {
          return <option value={el.id}>{el.year}</option>
        }
      })}
      <option value={4}>{2017}</option>
    </select>
  )
}


export default SeasonSelect
