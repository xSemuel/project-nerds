import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_GOODS } from '../../constants/catalog-goods';


export const snackbarSlice = createSlice({
    name : 'snackbar',
    initialState : {
        items : CATALOG_GOODS,
    },
    reducers : {

    }
});

export default snackbarSlice.reducer;