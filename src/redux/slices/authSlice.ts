import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState, User} from '../types';

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{user: User; token: string}>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
  },
});

export const {setLoading, loginSuccess, loginFailure, logout} =
  authSlice.actions;
export default authSlice.reducer;
