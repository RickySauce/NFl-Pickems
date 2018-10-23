import React from 'react';




const SeasonSelect = (props) => {

  const handleChange = (event) => {
   this.props.setSeasonId(event.target.value)
  }


  return(
    <select id="leagueSeasonId" onChange={handleChange}>
      {props.seasons.map(el =>{
        if (el.year === props.currentSeason.year){
          return <option key={el.id} value={el.id} defaultValue>{el.year}</option>
        } else {
          return <option key={el.id} value={el.id}>{el.year}</option>
        }
      })}
      <option value={4}>{2017}</option>
    </select>
  )
}


export default SeasonSelect
