import { BooksState } from "../globalType/bookType";
import { Book } from "../globalType/bookType";
import axios from "axios";
import { url } from "../Url";

import { createSlice, createAsyncThunk, AsyncThunk  } from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "./store";


const initialState: BooksState = {
  books: [],
  status: "idle",
  error: null,
  selectedGenres: [],
};

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export const fetchBooks: AsyncThunk<Book[], void, AsyncThunkConfig>= createAsyncThunk<Book[], void, AsyncThunkConfig>(

  "books/fetchBooks",
  async () => {
    const response = await axios.get<Book[]>(`${url}/api/books`);
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
