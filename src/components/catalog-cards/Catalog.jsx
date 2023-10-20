/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { forwardRef, useState } from 'react';

import { PaginationList } from './PaginationList';
import { CardItem } from './CardItem';

import { useSelector, useDispatch } from 'react-redux';
import { selectedGoods, addIdToCart } from '../../store/slices';

import { Snackbar, Box, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';


    const catalogContentWrapper = css`
        display: flex;
        flex-direction: column;
    `
    const cardWrapper = css `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 40px;
        row-gap: 30px;
        .list-reset();
        margin-top: 32px;
        margin-bottom: 58px;
    `
    const styleGoodsListEmpty =css`
        font-weight: bold;
        margin-top: 40px;
        text-align: center;
    `

export const Catalog = () => {

    const dispatch = useDispatch();
    const goods = useSelector(selectedGoods);
    const [pagePaginationCurrent, setPagePaginationCurrent] = useState(1);
    const handleChangePagination = (event, value) => {
        setPagePaginationCurrent(value);
    };
    

    const totalCountPagePagination = (goods) => {
        const totalCountGoods = goods.length
        const numberGoodsInPage = 4
        return Math.ceil(totalCountGoods/numberGoodsInPage)   
    }

    const handleCartAdd = (siteId) => {
        dispatch(addIdToCart(siteId))
        handleClick()
    }

    // ----------------------------- snackbar
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = useState(false);

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
        <Box>

            <Box css={catalogContentWrapper}>
                {goods.length !== 0 ?
                <Box>
                    <Box css={cardWrapper}>

                        {goods.slice((pagePaginationCurrent-1) * 4, (pagePaginationCurrent-1) * 4 + 4).map((item) =>
                            <CardItem
                                key={item.title}
                                options={item}
                                handleGoodCartAdd={() => handleCartAdd(item.id)}
                            />
                        )}
                        
                        {/* {goods.map((item) =>
                            <CardItem
                                key={item.title}
                                options={item}
                                handleGoodCartAdd={() => handleCartAdd(item.id)}
                            />
                        ).slice(pagePaginationCurrent, pagePaginationCurrent+4)} */}

                    </Box> 
                    <PaginationList funcChangePagination={handleChangePagination} currentPage={pagePaginationCurrent}  numberPage={totalCountPagePagination(goods)}/>
                </Box>:
                <Typography css={styleGoodsListEmpty} variant="h4">Жоден товар не відповідає вибраним критеріям, будь ласка змініть параметри пошуку.</Typography>}
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Товар успішно доданий в корзину!
                </Alert>
            </Snackbar>
        </Box>
    )
}