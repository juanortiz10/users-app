import * as ActionTypes from '../actions/types'

export const getUsers = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.START_GET_USERS:
      return action
    case ActionTypes.ERROR_GET_USERS:
      return action
        case ActionTypes.COMPLETE_GET_USERS:
      return action
    default:
      return state;
  }
}
