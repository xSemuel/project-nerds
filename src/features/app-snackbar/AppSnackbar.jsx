import { forwardRef, useState } from 'react';

import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

export const AppSnackbar = ({options, handleClick}) => {

    console.log(options, handleClick)

    const { severity, message, autoHideDuration = 6000 } = options;

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = useState(false);

    const handleClick1 = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
 
    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}
 