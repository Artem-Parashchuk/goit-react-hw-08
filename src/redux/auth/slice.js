import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, registerThunk } from "./operations"

const initialState = {
    user: {
        name: '',
        email: ''
    },
    token: null,
    isLoggedIn: false,
    error: false,
    loading: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectUserName: state => state.user.name,
        selectUserToken: state => state.token,
        selectUserLoading: state => state.isLoggedIn
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
    }
})

export const authReducer = slice.reducer
export const {selectUserName, selectUserToken, selectUserLoading} = slice.selectors