import { combineReducers } from "redux";
import userReducer from './userReducer'
import leagueReducer from './leagueReducer'
import seasonReducer from './seasonReducer'

const rootReducer = combineReducers({
  user: userReducer,
  league: leagueReducer,
  season: seasonReducer
})

export default rootReducer;
