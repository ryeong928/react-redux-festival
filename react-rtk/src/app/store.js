import {configureStore} from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'
import cakeSlice from '../features/cake/cakeSlice'
import icecreamSlice from '../features/icecream/icecreamSlice'
import userSlice from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    icecream: icecreamSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createLogger())
})

export default store