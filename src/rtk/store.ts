import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BookSlice";
// import cartReducer from "./CartSlice";
import { saveStateToLocalStorage, loadStateFromLocalStorage } from "./localstorage";
import loginReducer from "./loginSlice";
import registerReducer from "./registerSlice";
import cartSlice from "./CartSlice";

import BookDetails from "./BookDetailsSlice";

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    books: booksReducer,
    // cart: cartReducer,
    cart: cartSlice,
    login: loginReducer,
    register: registerReducer,

    BookDetails: BookDetails,
  },
  preloadedState: {
    cart: preloadedState,
  },
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;