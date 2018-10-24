export default function userPicksReducer(state = {season: '', weekly: '', loading: ''}, action) {
  switch (action.type) {

  case 'LOADING_PICKS':
    return {...state, loading: true};

  case 'LOADED_WEEKLY_PICKS':
    return {...state, weekly: action.picks, loading: false}

  case 'ADD_PICKS':
    return { season: [...state.season, action.picks], weekly: [...state.weekly, action.picks], loading: false};

    default:
      return state;

  }
};
