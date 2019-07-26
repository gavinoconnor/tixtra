import { FETCH_ALL_USERS, FETCH_USER, FETCH_ALL_VENUES, FETCH_ALL_EVENTS, LOG_IN, CREATE_USER, UPDATE_USER, TOGGLE_EDIT } from './types';

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

function fetchEvents(){
  return function(dispatch) {
    fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_ALL_EVENTS, payload: data})
    })
  }
}

function login(response) {
  console.log("action", response)
  return function(dispatch){
    dispatch({type: LOG_IN, payload: response})
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


export {
  fetchUsers,
  fetchUser,
  fetchVenues,
  fetchEvents,
  login,
  createUser,
  updateUser
}
