import relativeTime from '../../../../functions/relativeTime'

export function lockMatchups(gameTime, weekId){
  return (dispatch) => {
    dispatch({type: 'LOCK_MATCHUPS', gameTime})
    console.log('dispatched lock matchups')
    // let data = JSON.stringify({game_date_time: gameTime})
    // fetch(`/api/matchups/update/${weekId}`, {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   method: "PATCH",
    //   body: data
    // })
  }
};
