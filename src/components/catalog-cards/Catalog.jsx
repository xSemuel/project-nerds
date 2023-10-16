/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PaginationList } from './PaginationList';
import { CardItem } from './CardItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../../store/slices/goodsSlice';
import { addIdToCart } from '../../store/slices';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



    const cardWrapper = css `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 40px;
        row-gap: 30px;
        .list-reset();
        margin-top: 32px;
        margin-bottom: 58px;
    `

export const Catalog = () => {

    const dispatch = useDispatch();
    const goods = useSelector(selectGoods);


    const handleCartAdd = (siteId) => {
        dispatch(addIdToCart(siteId))
        handleClick()
    }

    // ----------------------------- snackbar
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    // ------------------------------ end snackbar

    return ( 
        <>
            <div css={cardWrapper}>
                {goods.map((item) =>
                    <CardItem
                        key={item.title}
                        options={item}
                        handleGoodCartAdd={() => handleCartAdd(item.id)}
                    />
                )}
            </div>
           
            <PaginationList />

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Товар успішно доданий в корзину!
                </Alert>
            </Snackbar>
        </>
    )
}