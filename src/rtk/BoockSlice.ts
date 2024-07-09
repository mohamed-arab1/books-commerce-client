import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BooksState } from "../data";
import { Book } from "../data";
import axios from "axios";

const initialState: BooksState = {
  books: [],
  status: "idle",
  error: null,
};

export const fetchBooks: any = createAsyncThunk<Book[]>(
  "books/fetchBooks",
  async () => {
    const response = await axios.get<Book[]>(
      "https://freetestapi.com/api/v1/books"
    );
    return response.data;
  }
);

const BoockSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch books";
      });
  },
});
export default BoockSlice.reducer;
