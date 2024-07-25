import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BookSlice";

import loginReducer from "./loginSlice";
import registerReducer from "./registerSlice";
import cartSlice from "./CartSlice";
// import authReducer from "./RefreshTokenSlice";
import BookDetails from "./BookDetailsSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,

    cart: cartSlice,
    login: loginReducer,
    register: registerReducer,

    BookDetails: BookDetails,
    // auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
