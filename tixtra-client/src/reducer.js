import {
  FETCH_USER,
  FETCH_ALL_USERS,
  FETCH_ALL_VENUES,
  FETCH_ALL_EVENTS,
  LOG_IN,
  CREATE_USER
  } from './types'

const defaultState = {
  currentUser: null,
  users: [],
  venues: [],
  events: [],
  isLoggedin: false
}


function reducer(prevState = defaultState, action) {
  switch(action.type) {
    case FETCH_ALL_USERS:
      return {...prevState, users: action.payload}
    case FETCH_ALL_VENUES:
      return {...prevState, venues: action.payload}
    case FETCH_ALL_EVENTS:
      return {...prevState, events: action.payload}
    case FETCH_USER:
      console.log(action.payload)
      return {...prevState, currentUser: action.payload}
    case LOG_IN:
    console.log('log in:', action.payload)
      return {...prevState, currentUser: action.payload }
    case CREATE_USER:
      return {...prevState, currentUser: action.payload }
    default:
      return prevState
  }
}

export default reducer
