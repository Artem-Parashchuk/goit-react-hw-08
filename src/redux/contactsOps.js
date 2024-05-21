import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://664b1d90a300e8795d444629.mockapi.io/'


export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
    try {
        const { data } = await axios.get('contacts')
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`contacts/${id}`)
        return data.id
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async (body, thunkApi) => {
    try {
        const { data } = await axios.post('contacts', body)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

