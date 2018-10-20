import React from 'react';
import { Button } from 'react-bootstrap';



const NewSeason = (props) => {

const createSeason = () => {
    fetch(`/api/seasons/new`)
    .then(resp => resp.json())
  }

  return(
    <Button onClick={createSeason}>New Season</Button>
  )
}

export default NewSeason
