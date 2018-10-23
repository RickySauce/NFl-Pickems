export function resetSeason(id){
  return (dispatch) => {
    dispatch({type: 'NEW_SEASON'})
  };
};
