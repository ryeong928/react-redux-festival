/*
redux : a predictable state container for javascript applications
  -> createStore, subscribe, getState, dispatch
react-redux : a library that provides bindings to use React and Redux together in an application. it allows react to use redux store
  -> connect, useDispatch, useSelector
redux-thunk : 함수를 만들어서 비동기 작업을 하고 필요한 시점에 특정 액션을 디스패치한다

redux-saga : 특정 액션을 모니터링하고, 해당 액션이 발동되면 제터레이터 함수를 실행하여 비동기 작업을 처리 후 액션을 디스패치

redux-toolkit : a library for efficient redux dev
  -> configureStore, createSlice, createAsyncThunk

--redux concerns
redux required too much boilerplate code
a lot of other packages have to be installed to work with redux

--redux toolkit
abstract over the setup process
handle the most common use cases
include some useful utilities
*/