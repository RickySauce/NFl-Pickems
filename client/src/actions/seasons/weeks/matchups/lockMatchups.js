export function lockMatchups(gameTime){
  return (dispatch) => {
    dispatch({type: 'LOCK_MATCHUPS', gameTime})
  }
};
