import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {axios} from '../../utils/axios';

const initialState = {
  category: [],
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk('auth/signUp', async auth => {
  const res = await axios
    .post('customer/send-otp', {mobile: auth})
    .then(res => res?.data)
    .then(res => res);

  return res;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
