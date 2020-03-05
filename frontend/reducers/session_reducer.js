import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id};
    default:
      return oldState;
  }
};

export default SessionReducer;