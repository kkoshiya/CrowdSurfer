import {
  RECIEVE_NEWS,
} from "../actions/news_actions";
import projectsReducer from "./projects_reducer";

const newsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type){
    case RECIEVE_NEWS:
      return action.news;
    default:
      return oldState
  }
};

export default newsReducer;