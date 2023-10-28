import { createSlice } from '@reduxjs/toolkit';
import { FILTER_NETWORK } from '../../constants';

const initialState = {
  price: [1000, 12000],
  layout: FILTER_NETWORK[0].defaultValue,
  features: [],
}

export const filterParamsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      return action.payload
    },
    resetFilters: () => initialState
  },
})

// Action creators are generated for each case reducer function
export const { updateFilters, resetFilters } = filterParamsSlice.actions
export const selectedFilters = state => state.filter;
export default filterParamsSlice.reducer

