import { Pojo} from '../../models/pojo'

export function fetchLeague(id){
  return (dispatch) => {
    dispatch({type: 'LOADING_LEAGUE'})
    fetch(`/api/leagues/${id}`)
    .then(res => res.json())
    .then(json => {
      json["owner"] = parseInt(sessionStorage.getItem("ID")) === json["owner_id"] ? true : false
      let league = new Pojo(json)
      debugger;
      dispatch({type: 'LEAGUE_LOADED', league: json})
      })
  };
};
