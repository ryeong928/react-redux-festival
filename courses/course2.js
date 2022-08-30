const redux = require('redux')
const {produce} = require('immer')

const initialState = {
  name: 'park',
  address: {
    street: '123 Main st',
    city: 'Seoul',
    state: 'KR'
  }
}
const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street
  }
}
const reducer = (state = initialState, action) => {
  switch (action.type){
    case STREET_UPDATED:
      // return {...state, address: {...state.address, street: action.payload}}
      return produce(state, darft => {darft.address.street = action.payload})
    default:
      return state
  }
}
const store = redux.createStore(reducer)
console.log(store.getState())
store.dispatch(updateStreet('000 kings road'))
console.log(store.getState())
// node ./courses/course2.js