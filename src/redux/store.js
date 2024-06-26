import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { authReducer } from './auth/slice';
import { contactReducer } from './contacts/slice';
import { filterReducer } from './filters/filtersSlice';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist:['token']
}

const store = configureStore({
  reducer: {
    contactList: contactReducer,
    filter: filterReducer,
    auth:  persistReducer(persistConfig, authReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store)

export default store;