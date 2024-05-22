import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import { authReducer } from './auth/slice';

const store = configureStore({
  reducer: {
    contactList: contactReducer,
    filter: filterReducer,
    auth: authReducer
  }
});

export default store;