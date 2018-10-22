import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';



const NewSeason = (props) => {

const createSeason = () => {
    fetch(`/api/seasons/new?league_id=${props.leagueId}`)
    .then(resp => resp.json())
    .then(json => {
      debugger;
    })
  }

  return(
    <Button onClick={createSeason}>New Season</Button>
  )
}

const mapStateToProps = (state) => {
  return  {
    leagueId: state.league.league.id
  }
}


export default connect(mapStateToProps)(NewSeason)
