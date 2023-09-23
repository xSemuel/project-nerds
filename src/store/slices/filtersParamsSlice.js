import { createSlice } from '@reduxjs/toolkit';
import { FILTER_NETWORK, FILTER_FEATURES } from '../../constants';

const initialState = {
  sliderFilter: [1000, 11000],
  networkFilter: FILTER_NETWORK[0].defaultValue,
  featuresFilter: [FILTER_FEATURES[1].value],
}

export const filterParamsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSlider: (state, action) => {
      state.sliderFilter = action.payload
    },
    changeNetwork: (state, action) => {
      state.networkFilter = action.payload
    },
    changeFeatures: (state, action) => {
      state.featuresFilter = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSlider, changeNetwork, changeFeatures } = filterParamsSlice.actions
export const selectedFilters = state => state.filter;
export default filterParamsSlice.reducer

