import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
     signInStart:(state)=>{
        state.loading = true
     },
     signInSucess: (state, action )=>{
          state.currentUser = action.payload;
          state.loading= false;
          state.error = null;
     },
     signInFailure:(state, action)=>{
        state.action = action.payload;
        state.loading = false;
     },
     updateUserStart:(state)=>{
      state.loading= true;
     },
     updateUserSucess:(state, action)=>{
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
     },
     updateUserFailure:(state, action)=>{
      state.error= action.payload;
      state.loading= false; 
     },
     deleteUserStart:(state)=>{
      state.loading = true;
     },
     deleteUserSuccess:(state)=>{
      state.currentUser = null;
      state.loading = false;
      state.error = null;
     },
     deleteUserFailure: (state, action)=>{
      state.error  = action.payload;
      state.loading = false;

     },
  }
});


export const {signInStart, signInSucess, signInFailure, updateUserFailure, updateUserStart, updateUserSucess,  deleteUserStart, deleteUserSuccess, deleteUserFailure} = userSlice.actions;
export default userSlice.reducer; 