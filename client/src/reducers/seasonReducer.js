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
      let season = action.season
      season.season.weeks = season.season.weeks.map(week => {
        week.matchups = week.matchups.map(matchup => {
          matchup["homeTeam"] = action.teams[matchup.homeId - 1]
          matchup["awayTeam"] = action.teams[matchup.awayId - 1]
          return matchup
        })
        return week
      })
      season.season["currentWeek"] = season.season.weeks.find(week => {
        if (new Date(week.startDateTime) <= new Date() && new Date() <= new Date(week.endDateTime)) {
          return week
        }
      })
      return {season: {loading: false, ...season}, loading: false}

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
