import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_GOODS } from '../../constants/catalog-goods';


export const goodsSlice = createSlice({
    name : 'goods',
    initialState : {
        goods : CATALOG_GOODS
    },
    reducers : {

    }
});


// export const {} = goodsSlice.actions;
export const selectGoods = state => state.goods.goods;
export default goodsSlice.reducer;