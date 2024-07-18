import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BookSlice";

import loginReducer from "./loginSlice";
import registerReducer from "./registerSlice";
import cartSlice from "./CartSlice";

import BookDetails from "./BookDetailsSlice";



const store = configureStore({
  reducer: {
    books: booksReducer,

    cart: cartSlice,
    login: loginReducer,
    register: registerReducer,

    BookDetails: BookDetails,
   

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
