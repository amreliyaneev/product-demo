import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDataApi } from "./HomeAPI";

const initialState = {
    loading: false,
    data: []
}

export const getAllData = createAsyncThunk("product/getAllData" , async () => {
    const response = await getAllDataApi()
    if(response && response.status == 200) {
        return response.data
    }
})

const HomeSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllData.pending, (state) => {
            state.loading = true
        }).addCase(getAllData.fulfilled, (state ,action) => {
            state.data = action.payload
            state.loading = false
        })
    }
})

export default HomeSlice.reducer