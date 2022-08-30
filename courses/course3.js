// asyncActions
// axios : requests to an API end point
// redux-thunk : a middleware that defines async action creators

const redux = require('redux')
const {createStore, applyMiddleware} = redux
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: '',
}
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED
  }
}
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users
  }
}
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  }
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USERS_REQUESTED:
      return {...state, loading: true}
    case FETCH_USERS_SUCCEEDED:
      return {loading: false, users: action.payload, error: ''}
    case FETCH_USERS_FAILED:
      return {loading: false, users: [], error: action.payload}
  }
}
const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchUsersRequest())
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const users = res.data.map(user => user.id)
      dispatch(fetchUsersSuccess(users))
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchUsersFailure(err.message))
    })
  }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())