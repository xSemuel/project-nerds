import { createSelector } from '@reduxjs/toolkit';

export const selectGoodsInGoodsSelector = state => state.goods
export const selectfilterInGoodsSelector = state => state.filter
export const selectSortInGoodsSelector = state => state.sort


export const selectedGoods = createSelector( [selectGoodsInGoodsSelector, selectfilterInGoodsSelector, selectSortInGoodsSelector], (goods, filter, sort) => { 
    return goods.items.filter(item => {
        const isPrice = item.descPrice >= filter.price[0] && item.descPrice <= filter.price[1]
        const isLayout = item.layout === filter.layout
        const isFeatures = filter.features.every(feature => item.features.includes(feature))

        return isPrice && isLayout && isFeatures
    
    }).sort((a, b) => {
        if (sort.sortType === "forPrice") {
            if (sort.sortDir === "ascending") {
                return a.descPrice - b.descPrice;
            } else {
                return b.descPrice - a.descPrice;
            }
        } else if (sort.sortType === "forType") {
            if (sort.sortDir === "ascending") {
                return a.descInfo.localeCompare(b.descInfo);
            } else {
                return b.descInfo.localeCompare(a.descInfo);
            }
        } else {
            if (sort.sortDir === "ascending") {
                return a.descName.localeCompare(b.descName);
            } else {
                return b.descName.localeCompare(a.descName);
            } 
        }
    });
})