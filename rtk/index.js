const store = require('./app/store')
const {cakeActions} = require('./features/cake/cakeSlice')
const icecreamActions = require('./features/icecream/icecreamSlice').actions
const fetchUsers = require('./features/user/userSlice').fetchUsers

// console.log('initial state : ', store.getState())
// const unsubscribe = store.subscribe(()=> console.log('updated state : ', store.getState()))
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(2))
store.dispatch(fetchUsers())
// unsubscribe()

// node ./rtk/index.js