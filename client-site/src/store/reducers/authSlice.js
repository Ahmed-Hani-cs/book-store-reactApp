import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: "",
    },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
            state.user = "Ahmed Hani";
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = "";
        },
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;