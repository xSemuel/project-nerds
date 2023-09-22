import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slices/searchParamsSlice';
import filterReducer from './slices/filtersParamsSlice';

export const store = configureStore({
    reducer: {
        sort: sortReducer,
        filter: filterReducer,
    },
  })