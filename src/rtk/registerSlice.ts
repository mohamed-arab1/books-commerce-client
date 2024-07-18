import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerBaseUrl } from "../Url";
import {
  AuthStateRegister,
  Credentials,
  UserType,
} from "../globalType/AuthType";

export const registerUser = createAsyncThunk<
  UserType,
  Credentials,
  { rejectValue: string }
>("auth/registerUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${ServerBaseUrl}/auth/signup`,
      credentials
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to login");
  }
});

const initialState: AuthStateRegister = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
