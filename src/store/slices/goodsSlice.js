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
    const { goods, filter } = state
    return goods.items.filter( item => {
        const isPrice = item.descPrice >= filter.price[0] && item.descPrice <= filter.price[1]
        const isLayout = item.layout === filter.layout
        const isFeatures = item.features.every(item => filter.features.includes(item)) && item.features.length === filter.features.length 


        return filter.features.length !== 0 ? isPrice && isLayout && isFeatures : isPrice && isLayout
    }   
)}
export default goodsSlice.reducer;