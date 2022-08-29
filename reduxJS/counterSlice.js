import {createSlice} from '@reduxjs/toolkit'
// slice : 분할된 store. createSlice를 통해 성성되며, configureStore를 통해 합쳐진다

const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    up: (state, action) => { state.value = state.value + action.payload },
    down: (state, action) => { state.value = state.value - action.payload },
    reset: (state, action) => { state.value = 0 },
  }
})

export default counterSlice