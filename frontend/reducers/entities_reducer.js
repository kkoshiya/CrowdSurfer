import userReducer from './user_reducer';
import projectReducer from './projects_reducer';
import newsReducer from './news_reducer';

import { combineReducers } from "redux";

const entitesReducer = combineReducers({
  users: userReducer,
  projects: projectReducer,
  news: newsReducer
})

export default entitesReducer;