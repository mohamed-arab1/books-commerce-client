import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './BoockSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    user:authSlice,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;