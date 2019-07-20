// import {FETCH_USER, FETCH_ALL_USERS } from './types';
//
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
// function fetchUsers(userId){
//   return function(dispatch){
//     fetch("http://localhost:3000/api/v1/users")
//     .then(res => res.json())
//     .then(data => {
//         dispatch({type: FETCH_ALL_USERS, payload: data})
//     })
//   }
// }
//
// export {
//   fetchUser,
//   fetchUsers
// }
//
// function templateAction(argsFromComponent){
//   return function(dispatch){
//     dispatch({type: "", payload: {}})
//   }
// }
