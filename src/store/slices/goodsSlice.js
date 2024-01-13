import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_GOODS } from '../../constants/catalog-goods';


export const goodsSlice = createSlice({
    name : 'goods',
    initialState : {
        items : CATALOG_GOODS,
        page: {
            limit: 4,
            offset: 0,
            currentPage: 1,
        },
    },
    reducers : {
        updateGoodsPage: (state, action) => {
            state.page = action.payload
        },
        
    
    }
});

export const { updateGoodsPage } =  goodsSlice.actions
export const pageGoodsSlice = state => state.goods.page;
export default goodsSlice.reducer;