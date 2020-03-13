import * as APIUtil from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


export const updateUser = (user) => dispatch => {
  return APIUtil.update(user).then( user => dispatch(receiveCurrentUser(user)))
}

export const getUser = (userId) => dispatch => {
  return APIUtil.getUser(userId).then( user => dispatch(receiveCurrentUser(user)))
}
