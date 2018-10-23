import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { newSeason } from '../../../actions/seasons/newSeason'



const NewSeason = (props) => {

  return(
    <Button onClick={() => props.newSeason(props.leagueId)}>New Season</Button>
  )
}

const mapStateToProps = (state) => {
  return  {
    leagueId: state.league.league.id
  }
}


export default connect(mapStateToProps,{newSeason})(NewSeason)
