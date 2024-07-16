import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './BoockSlice';
import  cartSlice  from "./CartSlice";


const store = configureStore({
  reducer: {
    books: booksReducer,
    cart : cartSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;