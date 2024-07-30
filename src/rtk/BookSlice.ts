import { BooksState } from "../globalType/bookType";
import { Book } from "../globalType/bookType";
import axios from "axios";
import { ServerBaseUrl } from "../Url";

import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

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

export const fetchBooks: AsyncThunk<Book[], void, AsyncThunkConfig> =
  createAsyncThunk<Book[], void, AsyncThunkConfig>(
    "books/fetchBooks",
    async () => {
      const response = await axios.get<Book[]>(`${ServerBaseUrl}/books`);
      return response.data;
    }
  );
export const addBook: AsyncThunk<Book, Book, AsyncThunkConfig> =
  createAsyncThunk<Book, Book, AsyncThunkConfig>(
    "books/addBook",
    async (newBook, { rejectWithValue }) => {
      try {
        const response = await axios.post<Book>(
          `${ServerBaseUrl}/books`,
          newBook
        );
        return response.data;
      } catch (error) {
        return rejectWithValue("Failed to add book");
      }
    }
  );
export const deleteBook: AsyncThunk<string, string, AsyncThunkConfig> =
  createAsyncThunk<string, string, AsyncThunkConfig>(
    "books/deleteBook",
    async (bookId, { rejectWithValue }) => {
      try {
        await axios.delete(`${ServerBaseUrl}/books/${bookId}`);
        return bookId;
      } catch (error) {
        return rejectWithValue("Failed to delete book");
      }
    }
  );
export const updateBook = createAsyncThunk<Book, Book>(
  "books/updateBook",
  async (updatedBook, { rejectWithValue }) => {
    try {
      const response = await axios.put<Book>(
        `${ServerBaseUrl}/books/${updatedBook._id}`,
        updatedBook
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to update book");
    }
  }
);

const BookSlice = createSlice({
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
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book._id !== action.payload);
        state.status = "succeeded";
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(
          (book) => book._id === action.payload._id
        );
        if (index !== -1) {
          state.books[index] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setGenres } = BookSlice.actions;
export default BookSlice.reducer;
