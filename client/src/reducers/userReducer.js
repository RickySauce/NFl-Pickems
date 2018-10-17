export default function userReducer(state = {user: '', logging_out: false}, action) {
  switch (action.type) {

    case 'LOG_IN':
      console.log(action)
      return {user: action.user, logging_out: false};

    case 'LOG_OUT':
      return {user: '', logging_out: true}

    case 'RESET_LOGGING_OUT':
      return {...state, logging_out: false}

    default:
      return state;

  }
};
