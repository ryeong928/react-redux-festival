import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  cats: [],
  error: ''
}

const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    getCatsPending: (state) => {
      state.isLoading = true
      state.cats = []
      state.error = ''
    },
    getCatsSuccess: (state, action) => {
      state.isLoading = false
      state.cats = action.payload
    },
    getCatsFailure: (state, action) => {
      console.log(action)
      state.isLoading = false
      state.error = action.payload
    },
  }
})

export const catActions = catSlice.actions
export default catSlice