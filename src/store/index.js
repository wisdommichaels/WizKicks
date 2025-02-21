import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

const store = configureStore({
    // Define your middleware here
    reducer: rootReducer,
    middleware : getDefaultMiddleware =>{
        return getDefaultMiddleware({
            serializableCheck : false //
            
        }) // Add your middleware here.
    },
    devTools : true
})

export default store;