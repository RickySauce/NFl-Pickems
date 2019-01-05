export function lockMatchups(gameTime, weekId){
  return (dispatch) => {
    dispatch({type: 'LOCK_MATCHUPS', gameTime})
    let data = JSON.stringify({game_date_time: gameTime})
    fetch(`/api/matchups/update/${weekId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: data
    })
    .then(resp => {debugger})
    .then(json => console.log(json))
  }
};
