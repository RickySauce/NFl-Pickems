export function lockMatchups(gameTime, weekId){
  console.log(weekId, gameTime)
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
  }
};
