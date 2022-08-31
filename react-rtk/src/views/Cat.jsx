import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { catActions } from "../features/catSlice";

export default () => {
  const cat = useSelector(state => state.cat)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(catActions.getCatsPending())
  }, [])
  return(
    <div>
      <h2>List of Cats</h2>
      {cat.cats.length !==0 ? cat.cats.map(cat => <div key={cat.id}>{cat.name}</div>) : 'working'}
    </div>
  )
}