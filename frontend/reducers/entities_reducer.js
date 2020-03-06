import userReducer from './user_reducer';
import projectReducer from './projects_reducer'
import { combineReducers } from "redux";

const entitesReducer = combineReducers({
  users: userReducer,
  projects: projectReducer
})

export default entitesReducer;