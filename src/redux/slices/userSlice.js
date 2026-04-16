import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../../services/server";

const initialState = {
    users: []
}

export const getAllUsers = createAsyncThunk('users', async () => {
    const res = await getUserData()
    return res
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (getUsers) => {
        getUsers.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default userSlice.reducer