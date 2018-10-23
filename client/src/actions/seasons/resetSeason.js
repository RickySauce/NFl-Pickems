export function resetSeason(id){
  return (dispatch) => {
    dispatch({type: 'RESET_SEASON'})
  };
};
