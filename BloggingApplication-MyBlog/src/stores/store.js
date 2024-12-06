import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const store = configureStore({
    reducer: {
        auth: authSlice // you can access you reducers using auth
    }
})

export default store;