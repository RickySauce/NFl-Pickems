export function fetchTeams(){
  return (dispatch) => {
    dispatch({type: 'LOADING_TEAMS'})
    fetch(`/api/users/${id}`)
    .then(resp => resp.json())
    .then(json => dispatch({ type: 'LOG_IN', user: json}))
  };
};
