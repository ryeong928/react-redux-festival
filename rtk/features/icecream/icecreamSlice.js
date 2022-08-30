const {createSlice} = require('@reduxjs/toolkit')
const {cakeActions} = require('../cake/cakeSlice')

const initialState = {numOfIcecreams: 20}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {state.numOfIcecreams--},
    restocked: (state, action) => {state.numOfIcecreams += action.payload}
  },
  // extraReducers: {
  //   ['cake/ordered']: (state, action) => {
  //     state.numOfIcecreams--
  //     // cake의 수와 icecream의 수가 동시에 감소하게됨
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {state.numOfIcecreams--})
  }
})

// 기존에는 액션이 디스패치 되면 모든 리듀서들이 해당 액션을 거쳐 반응을 할수있지만
// 툴킷에서는 특정 reducer는 해당 slice의 action에만 반응한다
// 만약 기존처럼 특정 reducer가 다른 slice의 action에도 반응하게 만들고 싶다면 extraReducers를 사용한다

module.exports = icecreamSlice