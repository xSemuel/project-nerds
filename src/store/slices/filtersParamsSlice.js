// {
//     filters: {
//         dateRange: [1, 100],

//     },
//      sort: {
//         type: 'sds',
//         dir: 'asc'
//      }
// }

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dateRange: [1, 100],
  networkFilter: 'Adaptive1',
  featuresFilter: 'blockFeatures',
}

export const filterParamsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    ascendingDir: (state) => {
      state.value += 1
    },
    descendingDir: (state) => {
      state.value -= 1
    },
    forPriceType: (state, action) => {
      state.value += action.payload
    },
    forTypeType: (state, action) => {
      state.value += action.payload
    },
    forNameType: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ascendingDir, descendingDir, forPriceType, forTypeType, forNameType } = filterParamsSlice.actions

export default filterParamsSlice.reducer

