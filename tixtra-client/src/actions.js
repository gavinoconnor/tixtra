import { FETCH_ALL_USERS, FETCH_USER, FETCH_ALL_VENUES, FETCH_VENUE, FETCH_ALL_EVENTS, FETCH_EVENT, LOG_IN, LOG_OUT, CREATE_USER, UPDATE_USER, MAKE_REQUEST, ADD_FRIEND } from './types';

function fetchUsers(){
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_ALL_USERS, payload: data})
    })
  }
}

function fetchUser(id){
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/users/${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_USER, payload: data})
    })
  }
}

function fetchVenues(){
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/venues")
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_ALL_VENUES, payload: data})
    })
  }
}

function fetchVenue(id){
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/venues/${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_VENUE, payload: data})
    })
  }
}

function fetchEvents(){
  return function(dispatch) {
    fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_ALL_EVENTS, payload: data})
    })
  }
}

function fetchEvent(id){
  return function(dispatch){
    fetch(`http://localhost:3000/api/v1/events/${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_EVENT, payload: data})
    })
  }
}

function login(response) {
  return function(dispatch){
    dispatch({type: LOG_IN, payload: response})
  }
}

function logout() {
  return function(dispatch){
    dispatch({type: LOG_OUT})
  }
}

function createUser(response) {
  return function(dispatch){
    dispatch({type: CREATE_USER, payload: response})
  }
}

function updateUser(id, response) {
  return function(dispatch) {
    dispatch({type: UPDATE_USER, payload: response})
  }
}

function makeRequest(response) {
  console.log("Request:", response)
  return function(dispatch){
    dispatch({type: MAKE_REQUEST, payload: response})
  }
}

function addFriend(response) {
  console.log("FRIEND ACTION:", response)
  return function(dispatch){
    dispatch({type: ADD_FRIEND, payload: response})
  }
}



export {
  fetchUsers,
  fetchUser,
  fetchVenues,
  fetchVenue,
  fetchEvents,
  fetchEvent,
  login,
  logout,
  createUser,
  updateUser,
  makeRequest,
  addFriend
}
