export function postUser(username,league_id){
  return (dispatch) => {
    fetch(`/api/leagues/${league_id}/users/add/${username}`, {
      headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
    },
      method: "POST"
    })
    .then(res => res.json())
    .then(json => { if (json.user) {
      dispatch({type: 'ADD_USER', user: json.user})
    }
  }
  )
  };
};
