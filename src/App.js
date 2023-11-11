import { increment,decrement,incrementByAmount } from "./cartSlice";
import { UseSelector,useDispatch, useSelector } from "react-redux"
import Second from './Second'
const App=()=>{
  const cart=useSelector(state=>state.cart.value)
  console.log(cart);
  const dispatch=useDispatch()
   return<> 
   <p>{cart}</p>
   <button onClick={()=>{dispatch(decrement())}}>-</button> 
   <button onClick={()=>{dispatch(increment())}}>+</button>
   <button onClick={()=>{dispatch(incrementByAmount(10))}}>+10</button>
   <Second />
  </>
}
export default App;