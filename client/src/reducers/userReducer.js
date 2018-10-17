export default function userReducer(state = {user: '', logging_out: false, leagues: []}, action) {
  switch (action.type) {

    case 'LOG_IN':
      return {user: action.user, leagues: [...action.user.leagues], logging_out: false};

    case 'LOG_OUT':
      return {user: '', logging_out: true}

    case 'RESET_LOGGING_OUT':
      return {...state, logging_out: false}

    default:
      return state;

  }
};
