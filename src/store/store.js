import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slices/searchParamsSlice';
import filterReducer from './slices/filtersParamsSlice';
import goodsSlice from './slices/goodsSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        sort: sortReducer,
        filter: filterReducer,
        goods: goodsSlice,
        cart: cartSlice,
    },
  })