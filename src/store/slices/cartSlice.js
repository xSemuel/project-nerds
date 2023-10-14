import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [] // id1, id2
    },
    reducers: {
        increment: (state, action) => {
            console.log(action.payload)
            state.value = Array.from(new Set([...state.value, action.payload])) // TODO: Array -> Set -> Array
        },
        remove: (state, action) => {
            const articul = action.payload;
            delete state.value[articul];
        }
    }
});

export const { increment, remove } = cartSlice.actions;

export const selectCart = state => state.cart.value; // TODO state.goods [{ id, .... }]   \\   createSelector 


export default cartSlice.reducer;