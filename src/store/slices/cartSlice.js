import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idCartMas: [],
    sumInCart: 0, 
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addIdToCart: (state, action) => {
            state.idCartMas = Array.from(new Set([...state.idCartMas, action.payload]))
        },
        removeIdToCart: (state, action) => {
            state.idCartMas = [...state.idCartMas].filter((id) => id !== action.payload)
        },
        resetCart: () => initialState,       
    }
});

export const { addIdToCart, removeIdToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;