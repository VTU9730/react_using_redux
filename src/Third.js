import { useDispatch, useSelector } from "react-redux";
import {increment} from './cartSlice'
import { counterInc } from "./counterSlice";
const Third=()=> {
  const cart=useSelector(state=>state.cart.value)
  const counter=useSelector(state=>state.counter.value)
  const dispatch=useDispatch()
  console.log("third re-render");
  return (
    <>
        <p>This is inner most child: {cart}{counter}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(counterInc())}>+</button>

    </>
  )
}
export default Third