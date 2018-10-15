export function fetchUser(id){
  console.log(id)
  return (dispatch) => {
    fetch(`/api/users/${id}`)
    .then(resp => resp.json())
    .then(json => dispatch({ type: 'LOG_IN', json}))
  };
};
