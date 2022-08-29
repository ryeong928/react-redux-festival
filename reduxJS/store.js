import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer // counterSlice에 포함된 모든 reducer를 한번에 등록
  }
})
export default store