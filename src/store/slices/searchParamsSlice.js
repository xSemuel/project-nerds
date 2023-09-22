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
    type: 'sds',
    dir: 'asc',
}

export const searchParamsSlice = createSlice({
  name: 'sorting',
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
export const { ascendingDir, descendingDir, forPriceType, forTypeType, forNameType } = searchParamsSlice.actions

export default searchParamsSlice.reducer

