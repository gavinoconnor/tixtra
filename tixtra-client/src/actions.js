import { FETCH_ALL_USERS, FETCH_USER, FETCH_ALL_VENUES, FETCH_ALL_EVENTS, LOG_IN, CREATE_USER } from './types';

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
      console.log(data)
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
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_ALL_EVENTS, payload: data})
    })
  }
}

function login(response) {
  return function(dispatch){
    dispatch({type: LOG_IN, payload: response})
  }
}

function createUser(){
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(data => {
      console.log(data)
        dispatch({type: CREATE_USER, payload: data})
    })
  }
}



export {
  fetchUsers,
  fetchUser,
  fetchVenues,
  fetchEvents,
  login,
  createUser
}
