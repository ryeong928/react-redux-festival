import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import session from 'redux-persist/lib/storage/session'
// reducers
import cakeSlice from './cakeSlice'
import icecreamSlice from './icecreamSlice'
import userSlice from './userSlice'
import catSlice from './catSlice'

const persistConfigCake = {
  key: 'root/cake',
  storage,
  whitelist: ["numOfCakes"]
}
const persistConfigUser = {
  key: 'root/user',
  storage: session,
  whitelist: ["users"]
}

export default combineReducers({
  cake: persistReducer(persistConfigCake, cakeSlice.reducer),
  icecream: icecreamSlice.reducer,
  user: persistReducer(persistConfigUser, userSlice.reducer),
  cat: catSlice.reducer,
})