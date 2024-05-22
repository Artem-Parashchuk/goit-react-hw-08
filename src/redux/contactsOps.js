import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../config/goitApi";


export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
    try {
        const { data } = await goitApi.get('/contacts')
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const { data } = await goitApi.delete(`/contacts/${id}`)
        return data.id
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async (body, thunkApi) => {
    try {
        const { data } = await goitApi.post('/contacts', body)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

