import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/api";


export const admin_login = createAsyncThunk(
    "auth/admin_login",
    async (info, {rejectWithValue}) => {
        console.log(info)
        try {
            const {data} = await api.post("/admin_login", info, {
                withCredentials: true
            });
            console.log(data)
        } catch (error) {
            // console.log(error.response.data)
            // dispatch(admin_login_failure(error.message))
            return rejectWithValue(error.response?.data?.message || 'Login Failed');
        }
    }
)



export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: false,
        userInfo: null, // Use null instead of an empty string
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state) => {
                state.loader = true;
                state.errorMessage = ""; // Clear previous errors
            })
            .addCase(admin_login.fulfilled, (state, action) => {
                state.loader = false;
                state.userInfo = action.payload;
                state.successMessage = "Login successful!";
            })
            .addCase(admin_login.rejected, (state, action) => {
                state.loader = false;
                state.errorMessage = action.payload || "Login failed";
            });
    },
});




export default authReducer.reducer;