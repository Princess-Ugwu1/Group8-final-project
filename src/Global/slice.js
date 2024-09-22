import { createSlice } from "@reduxjs/toolkit";

export const Slice=createSlice({
    name:"Groceria",
    initialState:{
        userData:"",
        id:""
    },
    reducers:{
        userData:(state,{payload})=>{
           
            const users = state.userData.findIndex(e => e.email === payload.email )
            if (users){
                alert("User already in redux")
            }   else{
                state.userData = payload 
            }
        },
        clearUser:(state)=>{
            state.userData={}
        },
        userId: (state, {payload})=>{
           state.id = payload 
        }
     

    }
})

export const {userData, clearUser, userId}=Slice.actions;

export default Slice.reducer;