import { createSlice } from "@reduxjs/toolkit";

export const Slice=createSlice({
    name:"Groceria",
    initialState:{
        userData:[],
        id:null
    },
    reducers:{
        userData:(state,{payload})=>{
            state.userData.push(payload)
        },
        clearUser:(state)=>{
            state.userData=[]
        }
     

    }
})

export const {userData, clearUser}=Slice.actions;

export default Slice.reducer;