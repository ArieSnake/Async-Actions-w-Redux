import { createSlice } from "@reduxjs/toolkit";
import { addUser, getUsers } from "./users.api";

const initialState ={
    accounts:[],
    status:""
}
export const UserSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    },
    extraReducers: builder => {
        builder
          .addCase(getUsers.pending, (state) => {
            state.status = "Loading..."
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.status = ''
            state.accounts = action.payload
          })
          .addCase(addUser.pending, (state) => {
            state.status = "Adding user..."
          })
          .addCase(addUser.fulfilled, (state, action) => {
            state.status = ''
            state.accounts.push(action.payload)
          })
      }
})

export const userReducer = UserSlice.reducer