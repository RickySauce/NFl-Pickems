export function lockMatchups(gameTime, weekId){
  return (dispatch) => {
    dispatch({type: 'LOCK_MATCHUPS', gameTime})
    // fetch(`/api/matchups/update`, {method: "POST"})
    // .then(res => res.json())
  }
};
