import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_GOODS } from '../../constants/catalog-goods';


export const goodsSlice = createSlice({
    name : 'goods',
    initialState : {
        items : CATALOG_GOODS
    },
    reducers : {

    }
});


// export const {} = goodsSlice.actions;
export const selectGoods = state => { 
    const { goods, filter, sort } = state
    return goods.items.filter(item => {
        const isPrice = item.descPrice >= filter.price[0] && item.descPrice <= filter.price[1]
        const isLayout = item.layout === filter.layout
        const isFeatures = filter.features.every(feature => item.features.includes(feature)) // TODO: AND, some => OR

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
}

export default goodsSlice.reducer;