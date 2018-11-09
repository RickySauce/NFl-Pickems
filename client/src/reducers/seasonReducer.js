export default function seasonReducer(state = {season: '', loading: false}, action) {
  switch (action.type) {

    case 'CREATING_SEASON':
      return {season: '', loading: true};

    case 'NEW_SEASON':
      return {season: '', loading: false};

    case 'RESET_SEASON':
      return {season: '', loading: false}

    case 'FETCHING_SEASON':
      return {season: {loading: true}, loading: false}

    case 'SEASON_LOADED':
      return {season: {loading: false, ...action.season}, loading: false}

    case 'CHANGE_CURRENT_WEEK':
      let week = state.season.season.weeks.find(week => week.id == action.weekId)
      let changeWeek = {...state}
      changeWeek["season"]["season"]["currentWeek"] = week
      return changeWeek

    case 'LOCK_MATCHUPS':
      let matchups = state.season.season.currentWeek.matchups.map(matchup => matchup.gameDateTime === action.gameTime ? {...matchup, locked: true} : matchup)
      let lockMatchups = {...state}
      lockMatchups["season"]["season"]["currentWeek"]["matchups"] = matchups
      return lockMatchups

    default:
      return state;

  }
};
