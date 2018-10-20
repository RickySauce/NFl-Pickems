import { combineReducers } from "redux";
import userReducer from './userReducer'
import leagueReducer from './leagueReducer'

const rootReducer = combineReducers({
  user: userReducer,
  league: leagueReducer
})

export default rootReducer;
