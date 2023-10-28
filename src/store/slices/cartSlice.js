import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        idCartMas: [],
        sumInCart: 0, 
        numberOfOrder: 0,
    },
    reducers: {
        addIdToCart: (state, action) => {
            state.idCartMas = Array.from(new Set([...state.idCartMas, action.payload]))
        },
        removeIdToCart: (state, action) => {
            state.idCartMas = [...state.idCartMas].filter((id) => id !== action.payload)
        },
        countNumberOfOrder: (state, action) => {
            state.numberOfOrder += 1; 
        }

    }
});

export const { addIdToCart, removeIdToCart, countNumberOfOrder } = cartSlice.actions;
export const currentNumberOfOrder = state => state.cart.numberOfOrder
export default cartSlice.reducer;