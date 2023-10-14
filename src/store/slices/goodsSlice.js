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
    })
    // }).sort(a, b)
}

export default goodsSlice.reducer;