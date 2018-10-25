import { Pojo} from '../../../models/pojo'

export function handlePicks(picks){
  return (dispatch) => {
    if(picks.length > 0){
      dispatch({type: 'LOADING_PICKS'})
      let data = JSON.stringify({user_picks: picks})
        fetch('/api/users/picks/submit', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: data
      })
      .then(res => res.json())
      .then(json => {
        dispatch({type: 'ADD_PICKS', picks: json.new_picks.map(pick => new Pojo(pick))})
      })
    }
  };
};
