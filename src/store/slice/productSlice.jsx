import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {axios} from '../../utils/axios';

const initialState = {
  product: [],
  isLoading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async id => {
    const res = await axios
      .get(`product/getProductBycategory/${id}`)
      .then(res => res.data)
      .then(res => res);
    const data = await axios
      .get(`product/getProductById/${id}`)
      .then(res => res.data)
      .then(res => res);
    console.log(data, 'data');

    return res;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProductById.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
