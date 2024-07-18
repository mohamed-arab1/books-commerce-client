import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BookSlice";
import BookDetails from "./BookDetailsSlice";
import  cartSlice  from "./CartSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    BookDetails: BookDetails,
    cart : cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
