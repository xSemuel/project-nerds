/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { forwardRef } from 'react';

import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import { useSelector, useDispatch } from 'react-redux';
import { selectedSnackbar } from '../../store/slices';
import { toogleSnakebar } from '../../store/slices'


    const snackbarAlert = css`
        width: '100%';
    `

export const AppSnackbar = () => {

    const dispatch = useDispatch();
    const selectedSnack = useSelector(selectedSnackbar);

    console.log(selectedSnack.snackProps)

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        dispatch(toogleSnakebar(false));
    };
 
    return (
        <Snackbar open={selectedSnack.open} autoHideDuration={selectedSnack.snackProps.autoHideDuration || 6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={selectedSnack.snackProps.severity} css={snackbarAlert} >
                {selectedSnack.snackProps.message}
            </Alert>
        </Snackbar>
    )
}
 