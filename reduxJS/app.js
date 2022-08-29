import store from './store'
import {Provider, useSelector, useDispatch} from 'react-redux'
import counterSlice from './counterSlice'


function Counter(){
  const dispatch = useDispatch()
  const count = useSelector(state => state.value)
  return(
    <div>
      {count}
      <button onClick={()=>{
        dispatch(counterSlice.actions.up(2))
        }}>+</button>
      <button onClick={()=>{
        dispatch(counterSlice.actions.down(2))
        }}>+</button>
      <button onClick={()=>{
        dispatch(counterSlice.actions.reset())
        }}>reset</button>
    </div>
  )
}

export default function App(){
  return(
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}