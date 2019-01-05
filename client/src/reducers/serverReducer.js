export default function serverReducer(state = {pending: false}, action) {
  switch (action.type) {

  case 'LOCK_MATCHUPS':
      return {pending: true}

  case 'RESET_PENDING':
      return {pending: false}

  default:
      return state;

  }
};
