export function setSeasonId(id){
  return (dispatch) => {
    dispatch({type: 'SET_SEASON_ID', id: id})
  };
};
