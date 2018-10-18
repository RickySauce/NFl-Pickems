export default function userReducer(state = {user: '', logging_out: false, loading: false}, action) {
  switch (action.type) {

    case 'LOG_IN':
      console.log(state.loading)
      return {user: action.user, logging_out: false, loading: false};

    case 'LOG_OUT':
      return {user: '', logging_out: true, loading: false}

    case 'RESET_LOGGING_OUT':
      return {...state, logging_out: false, loading: false}

    case 'ADD_LEAGUE':
      return {...state, user: {...state.user, leagues: [...state.user.leagues, action.league]}}

    case 'LOADING_USER':
      return {...state, loading: true}

    default:
      return state;

  }
};
