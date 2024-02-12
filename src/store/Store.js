import { configureStore } from '@reduxjs/toolkit';
import contentSlice from './slice/contentSlice'
import productSlice from './slice/productSlice';
import productList from './slice/productList';
import { authSlice } from './slice/authSlice';

export const store = configureStore({
  reducer: {
    content: contentSlice,
    product:productSlice,
    productList:productList,
    auth:authSlice
  }
});