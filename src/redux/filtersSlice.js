import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterText: ''
};

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filterText = action.payload;
        }
    }
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

// Селектор для отримання тексту фільтра
export const selectNameFilter = state => state.filter.filterText;
