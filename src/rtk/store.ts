import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BoockSlice";
import cartReducer from "./CartSlice";
import { saveStateToLocalStorage, loadStateFromLocalStorage } from "./localstorage";

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
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
