import { Pojo} from '../../models/pojo'

export function fetchSeason(id){
  return (dispatch) => {
    fetch(`/api/leagues/seasons/${id}`)
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: 'SEASON_LOADED', season: new Pojo(json)})
    });
  };
};
