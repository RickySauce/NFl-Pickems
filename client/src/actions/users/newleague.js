export function newLeague(league){
  return (dispatch) => {
    dispatch({type: 'ADD_LEAGUE', league: league})
  };
};
