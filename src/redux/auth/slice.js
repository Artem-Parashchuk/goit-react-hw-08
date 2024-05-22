import { createSlice } from "@reduxjs/toolkit"

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
        selectUserLoading: state => state.loading
    }
})

export const authReducer = slice.reducer
export const {selectUserName, selectUserToken, selectUserLoading} = slice.selectors