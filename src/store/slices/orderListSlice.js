import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfOrder: 0,
  ordersList: { 1: {}, 2: {},},
}

export const orderListSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    updateOrderList: (state, action) => {
      // console.log({...state.ordersList, action.payload})
      // return {...state.ordersList, action.payload}
      // { 1: {}, 2: {}, {} }
      // { numberOfOrder: 10, ordersList: { 1: {}, 2: {} } }
      state.numberOfOrder = 45
      state.ordersList = { ...state.ordersList, [state.numberOfOrder]:  action.payload}
    },
    countNumberOfOrder: (state, action) => {
      state.numberOfOrder += 1; 
    },
  },
})

export const { updateOrderList, countNumberOfOrder } = orderListSlice.actions
export const selectedOrderListSlice = state => state.orderList.ordersList;
export const currentNumberOfOrder = state => state.orderList.numberOfOrder;
export default orderListSlice.reducer

