import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {axios} from '../../utils/axios';

const initialState = {
  productList: [],
  isLoading: false,
  error: null,
};

export const fetchProductList = createAsyncThunk(
  'productList/fetchProductList',
  async searchQuary => {
    const res = await axios
      .get(`product/searchProduct/${searchQuary}`)
      .then(res => res.data)
      .then(res => res);

    return res;
  },
);

export const productList = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProductList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
    });
    builder.addCase(fetchProductList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productList.reducer;
