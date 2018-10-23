export function newSeason(id){
  return (dispatch) => {
    dispatch({type: 'CREATING_SEASON'})
    fetch(`/api/seasons/new?league_id=${id}`)
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: 'NEW_SEASON', currentSeason: json, id: json.id})
    });
  };
};
