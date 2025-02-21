import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const admin_login = createAsyncThunk(
    "auth/admin_login",
    async (info) => {
        try {
            const { }
        } catch (error) {
            
        }
    }
)
export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: false,
        userInfo : ""
    },
    reducers: {

    },
    extraReducers: () => {

    }
})

export default authReducer.reducer;