import { createSelector } from '@reduxjs/toolkit';

export const selectGoodsInCartSelector = state => state.goods
export const selectCartInCartSelector = state => state.cart


export const selectedGoodsInCart = createSelector( [selectGoodsInCartSelector, selectCartInCartSelector], (goods, cart) => {
return goods.items.filter(item => cart.idCartMas.includes(item.id)) 
})

export const sumSelectedGoodsInCart = createSelector( [selectGoodsInCartSelector, selectCartInCartSelector], (goods, cart) => {
    return goods.items.filter(item => cart.idCartMas.includes(item.id)).reduce((accum, item) => {
        return accum += item.descPrice
    }, 0);
})