import React from 'react';




const SeasonSelect = (props) => {

  return(
    <select>
      {props.seasons.map(el =>{
        return <option value={el.id}>{el.year}</option>
      })}
    </select>
  )
}


export default SeasonSelect
