import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {axios} from '../../utils/axios';

const initialState = {
  category: [],
  isLoading: false,
  error: null,
};

export const fetchContent = createAsyncThunk(
  'category/fetchContent',
  async () => {
    const res = await axios
      .get('category/viewCategory')
      .then(res => res.data)
      .then(res => res);

    return res;
  },
);

export const contentSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContent.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default contentSlice.reducer;
