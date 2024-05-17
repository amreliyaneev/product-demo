import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI } from "./LoginAPI";

const initialState = {
    loading: false,
    token: {}
}

export const getLoginData = createAsyncThunk('login/getLoginData', async(values) => {
    let response = await LoginAPI(values)
    if (response && response?.data) {    
        console.log(response);
        localStorage.setItem("token", JSON.stringify(response?.data))
    }
})

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLoginData.pending, (state) => {
            state.loading = true
        }).addCase(getLoginData.fulfilled,(state,action) => {
            state.token = action.payload
            state.loading = false
        })
    }
})

export default LoginSlice.reducer