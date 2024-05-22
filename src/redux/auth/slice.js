import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations"

const initialState = {
    user: {
        name: '',
        email: ''
    },
    token: null,
    isLoggedIn: false,
    error: false,
    loading: false,
    isRefreshing: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectUserName: state => state.user.name,
        selectUserToken: state => state.token,
        selectUserLoading: state => state.isLoggedIn,
        selectRefresh: state => state.isRefreshing
    },
    extraReducers: builder => {
        builder
        .addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logoutThunk.fulfilled, () => {
            return initialState
        })
        .addCase(refreshThunk.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
            state.isRefreshing = false
        })
        .addCase(refreshThunk.pending, state => {
            state.isRefreshing = true
        })
        .addCase(refreshThunk.rejected, state => {
            state.isRefreshing = false
        })
    }
})

export const authReducer = slice.reducer
export const {selectUserName, selectUserToken, selectUserLoading, selectRefresh} = slice.selectors