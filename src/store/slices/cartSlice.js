import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        idCartMas: [], // id1, id2
        sumInCart: 0, 
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

// export const selectCart = state => state.cart.idCartMas; // TODO state.goods [{ id, .... }]   \\   createSelector 

export const selectedGoodsInCart = state => {
    const { goods, cart } = state
    console.log(goods)
    console.log(cart)

    return goods.items.filter(item => cart.idCartMas.includes(item.id)) 
}

export const sumSelectedGoodsInCart = state => {
    const { cart, goods } = state;
    return goods.items.filter(item => cart.idCartMas.includes(item.id)).reduce((accum, item) => {
        return accum += item.descPrice
    }, 0);
}

export default cartSlice.reducer;