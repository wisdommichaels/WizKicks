import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/api";


export const admin_login = createAsyncThunk(
    "auth/admin_login",
    async (info) => {
        console.log(info)
        try {
            const {data} = await api.post("/admin_login", info, {
                withCredentials: true
            });
            console.log(data)
        } catch (error) {
            console.log(error.response.data)
            // dispatch(admin_login_failure(error.message))
        }
    }
)



export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo : ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state) => {
                state.loader = true;
            })
            .addCase(admin_login.fulfilled, (state, action) => {
                state.loader = false;
                state.userInfo = action.payload;
            })
            .addCase(admin_login.rejected, (state, action) => {
                state.loader = false;
                state.errorMessage = action.error.message;
            })

    }
})

export default authReducer.reducer;