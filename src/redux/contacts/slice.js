import { createSlice, createSelector, isAnyOf } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "./operations";
import { selectNameFilter } from "../filters/filtersSlice";
import { logoutThunk } from "../auth/operations";
import toast from "react-hot-toast";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const contactsSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.loading = false;
            })
            .addCase(logoutThunk.fulfilled, () => {
                return initialState
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(item => item.id !== payload);
                state.loading = false;
                toast.error(`контакт успішно видалено`)

            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.items.push(payload);
                state.loading = false;
                toast.success(`${payload.name} успішно додано`)
            })
            .addMatcher(
                isAnyOf(
                    fetchContactsThunk.pending, deleteContactThunk.pending,
                    addContactThunk.pending
                ),
                state => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchContactsThunk.rejected, deleteContactThunk.rejected,
                    addContactThunk.rejected
                ),
                state => {
                    state.loading = false;
                    state.error = true;
                }
            );
    }
});

export const contactReducer = contactsSlice.reducer;

// Окремо визначені селектори
export const selectContacts = state => state.contactList.items;
export const selectIsLoading = state => state.contactList.loading;
export const selectIsError = state => state.contactList.error;

export const selectContactFilter = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
