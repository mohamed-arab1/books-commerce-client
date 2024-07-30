

// Define types
import { User, Credentials, AuthState } from "../globalType/AuthType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ServerBaseUrl } from "../Url";
import axiosInstance from "../utlis/axios";


export const loginUser = createAsyncThunk<
  { user: User; tokens: { accessToken: string; refreshToken: string } },
  Credentials,
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(
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
  accessToken: null,
  refreshToken: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.tokens.accessToken;
        state.refreshToken = action.payload.tokens.refreshToken;
        localStorage.setItem("accessToken", action.payload.tokens.accessToken);
        localStorage.setItem("refreshToken", action.payload.tokens.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error logging in";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;