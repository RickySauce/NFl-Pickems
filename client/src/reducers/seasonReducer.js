export default function seasonReducer(state = {season: '', loading: false}, action) {
  switch (action.type) {

    case 'LOADING_SEASON':
      return {season: '', loading: true};

    default:
      return state;

  }
};
