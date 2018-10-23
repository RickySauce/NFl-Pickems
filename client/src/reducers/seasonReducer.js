export default function seasonReducer(state = {season: '', loading: false}, action) {
  switch (action.type) {

    case 'CREATING_SEASON':
      return {season: '', loading: true};

    case 'NEW_SEASON':
      return {season:'', loading: false};

    case 'RESET_SEASON':
      return {season:'', loading: false}

    case 'FETCHING_SEASON':
      return {season: {loading: true}, loading:false};

    case 'SEASON_LOADED':
      return {season: {loading: false, ...action.season}, loading: false}

    default:
      return state;

  }
};
