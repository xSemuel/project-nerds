import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        idCartMas: [],
        sumInCart: 0, 
    },
    reducers: {
        addIdToCart: (state, action) => {
            state.idCartMas = Array.from(new Set([...state.idCartMas, action.payload]))
        },
        removeIdToCart: (state, action) => {
            state.idCartMas = [...state.idCartMas].filter((id) => id !== action.payload)
        }
    }
});

export const { addIdToCart, removeIdToCart } = cartSlice.actions;
export default cartSlice.reducer;