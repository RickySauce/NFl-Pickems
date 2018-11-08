export function lockMatchups(matchup){
  return (dispatch) => {
    dispatch({type: 'LOCK_MATCHUPS', matchup})
  }
};
