import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BookSlice";
import BookDetails from "./BookDetailsSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    BookDetails: BookDetails,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
