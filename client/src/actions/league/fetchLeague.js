export function fetchLeague(id){
  return (dispatch) => {
    dispatch({type: 'LOADING_LEAGUE'})
    fetch(`/api/leagues/${id}`)
    .then(res => res.json())
    .then(json => {
      json["owner"] = parseInt(sessionStorage.getItem("ID")) === json["owner_id"] ? true : false
      dispatch({type: 'LEAGUE_LOADED', league: json})
      })
  };
};