import { createSlice } from '@reduxjs/toolkit';
import { SORT_TYPE, SORT_DIR } from '../../constants';

const initialState = {
    sortType: SORT_TYPE[0].value,
    sortDir: SORT_DIR[0].value,
}

export const searchParamsSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeDirection: (state, action) => {
        state.sortDir = action.payload; 
    },  
    changeType: (state, action) => {
        state.sortType = action.payload;
    },
    }
})

export const { changeDirection, changeType } = searchParamsSlice.actions
export const selectedSort = state => state.sort;
export default searchParamsSlice.reducer
