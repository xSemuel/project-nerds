import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfOrder: 1,
  ordersList: {},
}

export const orderListSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    updateOrderList: (state, action) => {
      state.ordersList = action.payload
    },
    countNumberOfOrder: (state, action) => {
      state.numberOfOrder += 1; 
    },
  },
})

export const { updateOrderList } = orderListSlice.actions
export const selectedOrderListSlice = state => state.orderList.ordersList;
export const currentNumberOfOrder = state => state.orderList.numberOfOrder;
export default orderListSlice.reducer

