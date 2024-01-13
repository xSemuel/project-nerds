import { createSelector } from '@reduxjs/toolkit';

export const selectGoodsInGoodsSelector = state => state.goods
export const selectfilterInGoodsSelector = state => state.filter
export const selectSortInGoodsSelector = state => state.sort


// ----- filters and sorts goods ------

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

// ----- Calculate the number of pages for pagination ------

export const totalPagesCount = createSelector( [selectedGoods, selectGoodsInGoodsSelector], (selectedGoods, goods) => {
    const totalCountGoods = selectedGoods.length;
    const numberGoodsInPage = goods.page.limit
    return Math.ceil(totalCountGoods/numberGoodsInPage)   
})

// ----- Cut goods for out in Catalog component ------

export const goodsForCurrentPage = createSelector( [selectedGoods, selectGoodsInGoodsSelector], (selectedGoods, goods) => {
    return selectedGoods.slice(goods.page.offset, goods.page.offset + goods.page.limit);
})





