import { useCallback, useContext, useState,memo } from "react"
import Third from "./Third";
import { useSelector } from "react-redux";
const Second=()=> {
   const cart=useSelector(state=>state.cart.value)
   console.log("second re-render");
  return (
    <>
      <p>This is inner child: {cart}</p>
      <Third />  
    </>
  )
}
export default Second