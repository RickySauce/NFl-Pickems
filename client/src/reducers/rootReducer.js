import { combineReducers } from "redux";
import userReducer from './userReducer'
import leagueReducer from './leagueReducer'
import seasonReducer from './seasonReducer'
import userPicksReducer from './userPicksReducer'
import teamsReducer from './teamsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  userPicks: userPicksReducer,
  league: leagueReducer,
  season: seasonReducer,
  teams: teamsReducer
})

export default rootReducer;
