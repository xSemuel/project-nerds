/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { forwardRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Button, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import { selectedGoodsInCart, sumSelectedGoodsInCart, removeIdToCart } from '../../store/slices';
import { Cart } from './Cart';

import cartEmpty from './img/cartEmpty.png'


export const CartList = () => {

    const dispatch = useDispatch();
    const cart = useSelector(selectedGoodsInCart);
    const cartSum = useSelector(sumSelectedGoodsInCart); 

    const handleCartDelete = (event) => {
        const siteId = event.currentTarget.value;
        dispatch(removeIdToCart(siteId))
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

    const wrapperCartEmpty = css`
        margin: 50px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `
   
    const styleCartEmpty = css`
        font-weight: bold;
        margin: 0 auto;
        margin-top: 40px;
    `
    const imgCartEmpty = css`
        height: 350px;
        width: 350px;
    `

    return (
        <div className="container">
            <Box css={cartWrapper}>
                {cart.length === 0 ? 
                    <Box css={wrapperCartEmpty}>
                        <img css={imgCartEmpty} src={cartEmpty} alt="cart empty"/>
                        <Typography css={styleCartEmpty} variant="h2">
                            Корзина пуста
                        </Typography>
                    </Box> :   
                    <Box>
                        <Cart options={cart} sumInCart={cartSum} handleGoodCartDelete={handleCartDelete} /> 
                        <Button css={buttonStyles}>
                            Оформити замовлення
                        </Button>
                    </Box>
                }
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    Товар видалений з корзини!
                </Alert>
            </Snackbar>
        </div>
    );

}
