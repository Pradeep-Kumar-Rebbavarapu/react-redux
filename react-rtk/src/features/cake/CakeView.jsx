import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ordered,restocked} from './cakeSlice'
export default function CakeView() {
    const numOfCakes = useSelector((state)=>{
        return state.cake.numOfCakes
    })
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number Of Cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order cake</button>
      <button onClick={()=>dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}
