import { Pojo} from '../../../models/pojo'

export function handlePicks(newPicks, existingPicks){
  return (dispatch) => {
    dispatch({type: 'LOADING_PICKS'})
    let nP = newPicks.filter(p => {
      if (existingPicks.find(eP => {console.log(p);
        return p.matchupId === eP.matchupId}) === undefined){
        return p
      }
    })
    console.log(nP)
    let data = JSON.stringify({user_picks: newPicks})
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
      dispatch({type: 'ADD_PICKS', picks: json.map(pick => new Pojo(pick))})
    })
  };
};


// compare newPicks with existing picks,
// do a newPicks.filter if pick does not exist, filters, if it exists push on new
// array
