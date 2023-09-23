import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: 'sds',
    dir: 'asc',
}

export const searchParamsSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeDirection: (state) => {
      state.value += 1
    },  
    changeType: (state, action) => {
      state.value += action.payload
    },
    }
})

// Action creators are generated for each case reducer function
export const { changeDirection, changeType } = searchParamsSlice.actions
export const selectedSort = state => state.sort;
export default searchParamsSlice.reducer

