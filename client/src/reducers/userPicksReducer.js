export default function userPicksReducer(state = { weekly: [], loading: ''}, action) {
  switch (action.type) {

  case 'LOADING_PICKS':
    return {...state, loading: true};

  case 'LOADED_WEEKLY_PICKS':
    return { weekly: action.picks, loading: false}

  case 'ADD_PICKS':
    return {weekly: state.weekly.concat(action.picks), loading: false};

   case 'UPDATE_PICKS':
      let newArray = state.weekly.map(function(el,idx){
        let uP = action.picks.find(el2 => el.matchupId === el2.matchupId)
        return uP ? uP : el
      })
      return {weekly: newArray, loading: false}

  case 'RESET_SEASON':
    return { weeky:[], loading: ''}

    default:
      return state;

  }
};
