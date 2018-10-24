export function handlePicks(newPicks, existingPicks){
  return (dispatch) => {
    dispatch({type: 'LOADING_PICKS'})
    let data = JSON.stringify({user_picks: newPicks})
      fetch('/api/users/picks/submit', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: data
    })
    .then(res => res.json())
    .then(json => {
      dispatch({type: 'ADD_PICKS', picks: json})
    })
  };
};
