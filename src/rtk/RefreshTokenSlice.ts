// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { api, setAuthToken } from '../AxiosConfig';

// interface AuthState {
//   token: string | null;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// }

// const initialState: AuthState = {
//   token: localStorage.getItem('accessToken'),
//   status: 'idle',
// };

//  export const refreshToken = createAsyncThunk(
//   'auth/refreshToken',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.post<{ accessToken: string }>('/auth/refresh');
//       const newToken = response.data.accessToken;
//       localStorage.setItem('accessToken', newToken);
//       setAuthToken(newToken);
//       return newToken;
//     } catch (error: any) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//       setAuthToken(action.payload);
//     },
//     clearToken: (state) => {
//       state.token = null;
//       setAuthToken(null);
//       localStorage.removeItem('accessToken');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(refreshToken.fulfilled, (state, action) => {
//         state.token = action.payload;
//         state.status = 'succeeded';
//       })
//       .addCase(refreshToken.rejected, (state) => {
//         state.token = null;
//         state.status = 'failed';
//       });
//   },
// });

// export const { setToken, clearToken } = authSlice.actions;
// export default authSlice.reducer;
