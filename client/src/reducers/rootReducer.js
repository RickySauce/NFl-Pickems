import { combineReducers } from "redux";
import userReducer from './userReducer'
import leagueReducer from './leagueReducer'
import seasonReducer from './seasonReducer'
import userPicksReducer from './userPicksReducer'
import teamsReducer from './teamsReducer'
import serverReducer from './serverReducer'

const rootReducer = combineReducers({
  user: userReducer,
  userPicks: userPicksReducer,
  league: leagueReducer,
  season: seasonReducer,
  teams: teamsReducer,
  serverReducer: serverReducer
})

export default rootReducer;
