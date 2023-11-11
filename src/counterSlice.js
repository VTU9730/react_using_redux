import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        counterInc:(state)=>{state.value+=1}
    }
})
export const {counterInc}=counterSlice.actions
export default counterSlice.reducer