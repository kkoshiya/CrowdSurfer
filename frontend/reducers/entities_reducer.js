import userReducer from './user_reducer'
import { combineReducers } from "redux";

const entitesReducer = combineReducers({
  users: userReducer
})

export default entitesReducer;