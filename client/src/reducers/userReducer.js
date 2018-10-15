export default function userReducer(state = {user: ''}, action) {
  switch (action.type) {

    case 'LOG_IN':
        console.log(action)
        return {user: action.user};

    case 'LOG_OUT':
      return {user: ''}

    default:
      return state;

  }
};
