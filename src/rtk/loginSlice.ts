import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerBaseUrl } from "../Url";

// Define types
import { User, Credentials, AuthState } from "../globalType/AuthType";

// Async thunk for login
export const loginUser = createAsyncThunk<
  User,
  Credentials,
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${ServerBaseUrl}/auth/signin`,
      credentials
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to login");
  }
});

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error logging in";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
