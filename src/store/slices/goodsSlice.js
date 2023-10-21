import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_GOODS } from '../../constants/catalog-goods';


export const goodsSlice = createSlice({
    name : 'goods',
    initialState : {
        items : CATALOG_GOODS,
        page: {
            limit: 4,
            offset: 0
        },
    },
    reducers : {

    }
});

export default goodsSlice.reducer;