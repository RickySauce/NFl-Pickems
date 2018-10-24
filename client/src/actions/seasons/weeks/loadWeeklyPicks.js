export function loadWeeklyPicks(userId, weekId, leagueSeasonId){
  return (dispatch) => {
    dispatch({type: 'LOADING_PICKS'})
      fetch('/api/users/picks/submit')
    .then(res => res.json())
    .then(json => {
      dispatch({type: 'LOADED_WEEKLY_PICKS', picks: json})
    })
  };
};
