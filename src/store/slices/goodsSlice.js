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
// export const selectGoods = state => state.goods.goods;
// export const selectGoods = state => { 
//     const { goods, filter } = state
//     return goods.items.filter((item, index) => {
//         const isPrice = item.descPrice >= filter.price[0] && item.descPrice <= dataFilter.sliderFilter[1]


//         // return isPrice && 
//     }   
// )}
export default goodsSlice.reducer;