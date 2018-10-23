import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { newSeason } from '../../../actions/seasons/newSeason'



const NewSeason = (props) => {

  const handleClick = () => {
    props.newSeason(props.leagueId);
    props.handleClick();
  }

  return(
    <div>
    <Button onClick={handleClick}>New Season</Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return  {
    leagueId: state.league.league.id
  }
}


export default connect(mapStateToProps,{newSeason})(NewSeason)
