import { createSlice } from '@reduxjs/toolkit';

const initialState = {
}

export const orderListSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    updateOrderList: (state, action) => {
      return action.payload
    }
  },
})

export const { updateOrderList } = orderListSlice.actions
export const selectedorderListSlice = state => state.orderList;
export default orderListSlice.reducer

