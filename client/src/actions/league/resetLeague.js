export function resetLeague(){
  return (dispatch) => {
    dispatch({type: 'LOADING_LEAGUE'})
  };
};
