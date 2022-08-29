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

// import
const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combinedReducers = redux.combinedReducers

// action
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'
function orderCake(){
  return{
    type: CAKE_ORDERED, 
    quantity: 1
  }
}
function restockCake(qty = 1){
  return{
    type: CAKE_RESTOCKED, 
    payload: qty
  }
}
function orderIceCream(){
  return{
    type: ICECREAM_ORDERED, 
    quantity: 1
  }
}
function restockIceCream(qty = 1){
  return{
    type: ICECREAM_RESTOCKED, 
    payload: qty
  }
}
const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)

// state : {numOfCakes, numOfIceCreams}
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// }
const initialCakeState = {numOfCakes: 10}
const initialIceCreamState = {numOfIceCreams: 10}

// reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case CAKE_ORDERED:
      return {...state, numOfCakes: state.numOfCakes - 1}
    case CAKE_RESTOCKED:
      return {...state, numOfCakes: state.numOfCakes + action.payload}
    default:
      return state
  }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type){
    case ICECREAM_ORDERED:
      return {...state, numOfIceCreams: state.numOfIceCreams - 1}
    case ICECREAM_RESTOCKED:
      return {...state, numOfIceCreams: state.numOfIceCreams + action.payload}
    default:
      return state
  }
}
// state : {cake: {numOfCakes}, iceCream: {numOfIceCreams}}
const rootReducer = combinedReducers({
  cake: cakeReducer, 
  iceCream: iceCreamReducer
})
// store
const store = createStore(rootReducer)

// implement
console.log('initialState: ', store.getState())
const unsubscribe = store.subscribe(() => console.log('update state : ', store.getState()))
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockCake(2)
unsubscribe()