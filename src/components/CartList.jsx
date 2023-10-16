/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import { selectedGoodsInCart, sumSelectedGoodsInCart } from '../store/slices/cartSlice';
import { Cart } from '../components';

export const CartList = () => {

    const cart = useSelector(selectedGoodsInCart);
    const cartSum = useSelector(sumSelectedGoodsInCart); 

    console.log(cart.length)
    console.log(cartSum)

    const cartWrapper = css`
        min-height: 500px;
        margin: 15px auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    `
    const buttonStyles = css`  
        width: 260px;
        height: 52px;
        margin: 0 auto;
        margin-bottom: 30px;
        background: #eee;
        color: #000;
        fontSize: 16px;
        fontWeight: 500;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
        transition: .3s ease-in;
        &:hover {
            background: #d7373b;
            color: #ffffff;
        }
    `

    return (
        <div className="container">
            <Box css={cartWrapper}>
                <Cart options={cart} sumInCart={cartSum} />
                <Button css={buttonStyles}>
                    Оформити замовлення
                </Button>
            </Box>
        </div>
    );

}
