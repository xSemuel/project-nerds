import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
    name : 'snackbar',
    initialState : {
        open: false,
        snackProps: {
            severity: "success",
            message: '',
            autoHideDuration: 6000,
        },
    },
    reducers : {
        toogleSnakebar: (state, action) => {
            state.open = action.payload;
          },
        updateSnakebar: (state, action) => {
            state.snackProps = action.payload;
        },
    }
});


export const { toogleSnakebar, updateSnakebar } = snackbarSlice.actions;
export const selectedSnackbar = state => state.snackbar;

export default snackbarSlice.reducer;