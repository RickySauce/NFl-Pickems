export default function userPicksReducer(state = {season: [], weekly: [], loading: ''}, action) {
  switch (action.type) {

  case 'LOADING_PICKS':
    return {...state, loading: true};

  case 'LOADED_WEEKLY_PICKS':
    return {...state, weekly: action.picks, loading: false}

  case 'ADD_PICKS':
    return { season: state.season.concat(action.picks), weekly: state.weekly.concat(action.picks), loading: false};

  case 'RESET_SEASON':
    return {season:[], weeky:[], loading: ''}

    default:
      return state;

  }
};
