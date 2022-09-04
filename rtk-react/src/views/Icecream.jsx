import React from "react";
import { useSelector, useDispatch } from "react-redux";
import icecreamSlice from "../features/icecreamSlice";

export default () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecream = useSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return(
    <div>
      <h2>Number of Icecreams : {numOfIcecream}</h2>
      <button onClick={() => dispatch(icecreamSlice.actions.ordered())}>order icecream</button>
      <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(icecreamSlice.actions.restocked(value))}>restock icecream</button>
    </div>
  )
}