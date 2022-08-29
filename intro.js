/*
--Redux
the patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated,
and how your application logic will behave when those changes occur

--core concepts
action : a plain javascript object that has a 'type' property that describes what happened in the application
reducer : a function that accepts state and action as arguments, and returns the next state of the app. it specifies how the app's state changes in response to dispatched action sent to the store
store : holds the state of your application
  one store for the entire app
  getState() : allows access to state 
  dispatch(action) : allows state to be updated
  subscribe(listener) : handles registering and unregistering of listeners

--three principles
1. the global state of your application is stored as an object inside a single store
2. the only way to change the state is to dispatch an action, an object that describes what happened
3. to specify how the state tree is updated based on actions, you write pure reducers

redux : a predictable state container for javascript applications
  -> createStore, subscribe, getState, dispatch
react-redux : a library that provides bindings to use React and Redux together in an application
  -> connect, useDispatch, useSelector
redux-toolkit : a library for efficient redux dev
  -> configureStore, createSlice, createAsyncThunk
*/
const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
function orderCake(){
  return{
    type: CAKE_ORDERED, 
    quantity: 1
  }
}

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case CAKE_ORDERED:
      return {...state, numOfCakes: state.numOfCakes - 1}
    default:
      return state
  }
}

const store = createStore(reducer)
console.log('initialState: ', store.getState())
const unsubscribe = store.subscribe(() => console.log('update state : ', store.getState()))
store.dispatch(orderCake())
unsubscribe()