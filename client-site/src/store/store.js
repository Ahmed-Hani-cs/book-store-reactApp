import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './reducers/bookSlice'
import auth from './reducers/authSlice'
const store = configureStore({
    reducer: {
        book: bookReducer,
        auth
    }
})

export default store;