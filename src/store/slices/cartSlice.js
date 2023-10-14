import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        idCartMas: [] // id1, id2
    },
    reducers: {
        addIdToCart: (state, action) => {
            state.idCartMas = Array.from(new Set([...state.idCartMas, action.payload])) // TODO: Array -> Set -> Array
        },
        removeIdToCart: (state, action) => {
            const articul = action.payload;
            delete state.idCartMas[articul];
        }
    }
});

export const { addIdToCart, removeIdToCart } = cartSlice.actions;

export const selectCart = state => state.cart.idCartMas; // TODO state.goods [{ id, .... }]   \\   createSelector 


export default cartSlice.reducer;