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
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state) => {
                state.loader = true;
                state.errorMessage = "";
            })
            // .addCase(admin_login.fulfilled, (state, action) => {
            //     state.loader = false;
            //     state.userInfo = action.payload;
            //     state.successMessage = "Login successful!";
            // })
            .addCase(admin_login.rejected, (state, {payload}) => {
                state.loader = false;
                state.errorMessage = payload.error;
            });
    },
});



export const { clearErrorMessage } = authReducer.actions;
export default authReducer.reducer;