import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        idCartMas: [], // id1, id2
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
 
// export const selectGoods = state => state.goods
// export const selectCart = state => state.cart


// export const selectedGoodsInCart = createSelector( [a, b], (goods, cart) => {
//     return goods.items.filter(item => cart.idCartMas.includes(item.id)) 
// })


// export const selectedGoodsInCart = state => {
//     const { goods, cart } = state
//     return goods.items.filter(item => cart.idCartMas.includes(item.id)) 
// }

// export const sumSelectedGoodsInCart = state => {
//     const { cart, goods } = state;
//     return goods.items.filter(item => cart.idCartMas.includes(item.id)).reduce((accum, item) => {
//         return accum += item.descPrice
//     }, 0);
// }

export default cartSlice.reducer;