import { BookDetailsState } from "../globalType/bookType";
import { Book } from "../globalType/bookType";
import axios from "axios";
import { ServerBaseUrl } from "../Url";

import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "./store";

const initialState: BookDetailsState = {
  bookDetails: {} as Book,
  status: "idle",
  error: null,
};

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export const fetchBookDetails: AsyncThunk<Book, string, AsyncThunkConfig> =
  createAsyncThunk<Book, string, AsyncThunkConfig>(
    "books/fetchBookDetails",
    async (id: string) => {
      const response = await axios.get<Book>(`${ServerBaseUrl}/books/${id}`);
      return response.data;
    }
  );

const BookSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookDetails = action.payload;
      })
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch book details";
      });
  },
});
export default BookSlice.reducer;
