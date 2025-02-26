import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/api";


export const admin_login = createAsyncThunk(
    "auth/admin_login",
    async (info, {rejectWithValue, fulfillWithValue}) => {
        console.log(info)
        try {
            const {data} = await api.post("/admin_login", info, {
                withCredentials: true
            });
            localStorage.setItem("userToken", JSON.stringify(data));
            // console.log(data)
            return fulfillWithValue(data);
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data);
        }
    }
)



export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: "",
        userInfo: null, // Use null instead of an empty string
    },
    reducers: {
        clearErrorMessage: (state) => {
            state.errorMessage = "";
        },
        clearSuccessMessage: (state) => {
            state.successMessage = "";
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state) => {
                state.loader = true;
                state.errorMessage = "";
            })
            .addCase(admin_login.fulfilled, (state, {payload}) => {
                state.loader = false;
                state.successMessage = payload.message;
            })
            .addCase(admin_login.rejected, (state, {payload}) => {
                state.loader = false;
                state.errorMessage = payload.error;
            });
    },
});



export const { clearErrorMessage } = authReducer.actions;
export const { clearSuccessMessage } = authReducer.actions;
export default authReducer.reducer;