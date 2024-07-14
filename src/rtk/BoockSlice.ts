import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BooksState } from "../globalType/bookType";
import { Book } from "../globalType/bookType";
import axios from "axios";
import { url } from "../Url";

const initialState: BooksState = {
  books: [],
  status: "idle",
  error: null,
  selectedGenres: [],
};

export const fetchBooks = createAsyncThunk<Book[]>(
  "books/fetchBooks",
  async () => {
    const response = await axios.get<Book[]>(`${url}/books`);
    return response.data;
  }
);

const BoockSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.selectedGenres = action.payload;
    },
  },
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
export const { setGenres } = BoockSlice.actions;
export default BoockSlice.reducer;
