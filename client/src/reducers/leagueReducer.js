export default function leagueReducer(state = {league: '', loading: false}, action) {
  switch (action.type) {

    case 'LOADING_LEAGUE':
      return {league: '', loading: true};

    case 'LEAGUE_LOADED':
      return {league: action.league, loading: false}

    default:
      return state;

  }
};
