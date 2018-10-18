export function fetchUser(id){
  return (dispatch) => {
    dispatch({type: 'LOADING_USER'})
    fetch(`/api/users/${id}`)
    .then(resp => resp.json())
    .then(json => dispatch({ type: 'LOG_IN', user: json}))
  };
};
