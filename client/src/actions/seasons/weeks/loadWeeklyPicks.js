export function loadWeeklyPicks(userId, weekId, leagueSeasonId){
  return (dispatch) => {
    dispatch({type: 'LOADING_PICKS'})
    fetch(`/api/users/picks/weekly?user_id=${userId}&week_id=${weekId}&league_season_id=${leagueSeasonId}`)
    .then(res => res.json())
    .then(json => {
      dispatch({type: 'LOADED_WEEKLY_PICKS', picks: json})
    })
  };
};
