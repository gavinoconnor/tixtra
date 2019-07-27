import {
  FETCH_ALL_USERS,
  FETCH_ALL_VENUES,
  FETCH_ALL_EVENTS,
  FETCH_USER,
  FETCH_VENUE,
  FETCH_EVENT,
  LOG_IN,
  LOG_OUT,
  CREATE_USER,
  UPDATE_USER
  } from './types'

const defaultState = {
  currentUser: null,
  isLoggedin: false,
  viewedUser: null,
  selectedVenue: null,
  selectedEvent: null,
  users: [],
  venues: [],
  events: [],
  tickets: [],
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
      console.log("USER:", action.payload)
      return {...prevState, viewedUser: action.payload}
    case FETCH_VENUE:
      console.log("VENUE:", action.payload)
      return {...prevState, selectedVenue: action.payload}
    case FETCH_EVENT:
      console.log("EVENT:", action.payload)
      return {...prevState, selectedEvent: action.payload}
    case LOG_IN:
      return {...prevState, currentUser: action.payload}
    case LOG_OUT:
      return {...prevState, currentUser: null}
    case CREATE_USER:
      return {...prevState, currentUser: action.payload}
    case UPDATE_USER:
      return {...prevState, currentUser: action.payload}
    default:
      return prevState
  }
}

export default reducer
