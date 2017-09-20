import * as ActionTypes from './types'
import http from './Http'

const startGetUsers = () =>{
  return{
    type: ActionTypes.START_GET_USERS,
    ready: false,
    payload: false
  }
}

const completeGetUsers = (data) =>{
  return{
    type: ActionTypes.COMPLETE_GET_USERS,
    ready: true,
    payload: data
  }
}

const errorGetUsers = (err) =>{
  return{
    type: ActionTypes.ERROR_GET_USERS,
    ready: false,
    error: err
  }
}

export const getUsers = (data) => {
  return ( dispatch, getState ) => {
    dispatch(startGetUsers());
    http.get('/users/')
      .then(response => {
        dispatch(completeGetUsers(response.data))
      }).catch(err => {
        dispatch(errorGetUsers(err));
      })
  }
}
