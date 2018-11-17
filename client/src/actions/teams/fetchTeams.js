import { Pojo} from '../../models/pojo'


export function fetchTeams(){
  return (dispatch) => {
    dispatch({type: 'LOADING_TEAMS'})
    fetch(`/api/teams`)
    .then(resp => resp.json())
    .then(json => dispatch({ type: 'TEAMS_LOADED', teams: json.map(team => new Pojo(team))}))
  };
};
