import { Pojo} from '../../models/pojo'

export function fetchSeason(id, teams){
  return (dispatch) => {
    dispatch({type: 'FETCHING_SEASON'})
    fetch(`/api/leagues/seasons/${id}`)
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: 'SEASON_LOADED', season: new Pojo(json), teams})
    });
  };
};
