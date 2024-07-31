import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  name?: string;
  quantity: number;
}

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const findProduct = state.find((product) => product._id === action.payload._id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      return state.filter((product) => product._id !== action.payload._id);
    },
    decreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const findProduct = state.find((product) => product._id === action.payload._id);
      if (findProduct && findProduct.quantity > 1) {
        findProduct.quantity -= 1;
      } else if (findProduct) {
        return state.filter((product) => product._id !== action.payload._id);
      }
    },
    clear: () => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, decreaseQuantity, clear } = cartSlice.actions;
export default cartSlice.reducer;
