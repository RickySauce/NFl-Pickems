export default function teamsReducer(state = {teams: [], loading: ''}, action) {
  switch (action.type) {

  case 'LOADING_TEAMS':
      return {...state, loading: true}

  case 'TEAMS_LOADED':
      console.log(action.teams)
      return {teams: [...action.teams], loading: false}

  default:
      return state;

  }
};
