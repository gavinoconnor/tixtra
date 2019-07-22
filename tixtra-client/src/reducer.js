import { FETCH_USER, FETCH_ALL_USERS, FETCH_ALL_VENUES, FETCH_ALL_EVENTS } from './types'

const defaultState = {
  currentUser: null,
  users: [],
  venues: [],
  events: []
}


function reducer(prevState = defaultState, action) {
  switch(action.type) {
    case FETCH_ALL_USERS:
      return {...prevState, users: action.payload}
      case FETCH_ALL_VENUES:
        return {...prevState, venues: action.payload}
      case FETCH_ALL_EVENTS:
        return {...prevState, events: action.payload}
    default:
    return prevState
  }
}

export default reducer
