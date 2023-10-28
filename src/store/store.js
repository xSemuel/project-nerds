import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slices/searchParamsSlice';
import filterReducer from './slices/filtersParamsSlice';
import goodsSlice from './slices/goodsSlice';
import cartSlice from './slices/cartSlice';
import snackbarSlice from './slices/snackbarSlice';
import orderListSlice from './slices/orderListSlice';

export const store = configureStore({
    reducer: {
        sort: sortReducer,
        filter: filterReducer,
        goods: goodsSlice,
        cart: cartSlice,
        snackbar: snackbarSlice,
        orderList: orderListSlice,
    },
  })