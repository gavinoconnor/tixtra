import { FETCH_ALL_USERS, FETCH_ALL_VENUES, FETCH_ALL_EVENTS } from './types';

function fetchUsers(){
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(data => {
      dispatch({type: FETCH_ALL_USERS, payload: data})
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

// function fetchUser(userId){
//   return function(dispatch){
//     fetch(`http://localhost:3000/api/v1/users/${userId}`)
//     .then(res => res.json())
//     .then(data => {
//         dispatch({type: FETCH_USER, payload: data})
//     })
//   }
// }
//
//
export {
  fetchUsers,
  fetchVenues,
  fetchEvents
}
