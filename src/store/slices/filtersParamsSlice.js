import { createSlice } from '@reduxjs/toolkit';
import { FILTER_NETWORK, FILTER_FEATURES } from '../../constants';


const initialState = {
  price: [1000, 11000],
  layout: FILTER_NETWORK[0].defaultValue,
  features: [FILTER_FEATURES[1].value],
}

export const filterParamsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSlider, changeNetwork, changeFeatures } = filterParamsSlice.actions
export const selectedFilters = state => state.filter;
export default filterParamsSlice.reducer

