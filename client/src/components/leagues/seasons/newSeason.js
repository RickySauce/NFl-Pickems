import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';



const NewSeason = (props) => {

const createSeason = () => {
    fetch(`/api/seasons/new`)
    .then(resp => resp.json())
    .then(json => {
      debugger;
    })
  }

  return(
    <Button onClick={createSeason}>New Season</Button>
  )
}

export default connect()(NewSeason)
