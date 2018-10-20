export default function leagueReducer(state = {league: '', loading: true}, action) {
  switch (action.type) {

    case 'LOADING_LEAGUE':
      return {league: '', loading: true};

    case 'LEAGUE_LOADED':
      return {league: action.league, loading: false}

    case 'REMOVE_USER':
      return {...state, league: {...state.league, users: [...state.league.users.filter(el => el.id !== action.id)]}}

    default:
      return state;

  }
};
