/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { selectedGoodsInCart, sumSelectedGoodsInCart, removeIdToCart } from '../store/slices/cartSlice';
import { Cart } from '../components';

export const CartList = () => {

    const dispatch = useDispatch();
    const cart = useSelector(selectedGoodsInCart);
    const cartSum = useSelector(sumSelectedGoodsInCart); 

    console.log(cart.length)
    console.log(cartSum)

    const handleCartDelete = (event) => {
        const siteId = event.currentTarget.value;
        dispatch(removeIdToCart(siteId))
    }

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
    const styleCartEmpty =css`
        font-weight: bold;
        margin: 0 auto;
        margin-top: 40px;
    `

    return (
        <div className="container">
            <Box css={cartWrapper}>
                {cart.length === 0 ? <Typography css={styleCartEmpty} variant="h2">Корзина пуста</Typography> :   
                <>
                    <Cart options={cart} sumInCart={cartSum} handleGoodCartDelete={handleCartDelete} /> 
                    <Button css={buttonStyles}>
                        Оформити замовлення
                    </Button>
                </>
                }
            </Box>
        </div>
    );

}
