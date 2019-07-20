
const defaultState = {
  currentUser: null,
  users: [],
  venues: [],
  events: []
}


function reducer(prevState = defaultState, action) {
  console.log(prevState)
  switch(action.type) {
    default:
    return prevState
  }
}

export default reducer
