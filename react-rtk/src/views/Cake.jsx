import React from "react";
import { useSelector, useDispatch} from 'react-redux'
import cakeSlice from "../features/cake/cakeSlice";

export default () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return(
    <div>
      <h2>Number of Cakes : {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeSlice.actions.ordered())}>order cake</button>
      <button onClick={() => dispatch(cakeSlice.actions.restocked(3))}>restock cake</button>
    </div>
  )
}