/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
// import { selectGoods } from '../store/slices/goodsSlice';
import { selectCart } from '../store/slices/cartSlice';
import { Cart } from '../components';
// import { remove } from '../store/slices/cartSlice';

export const CartList = () => {
    // const dispatch = useDispatch();
    // const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);


    // const clickHandler = (event) => {
    //     event.preventDefault();
    //     const articul = event.target.getAttribute('data-key')

    //     if (event.target.classList.contains('minus-from-cart')){   
    //         const quantity = cart[articul]
    //         const action = quantity > 1 ? minus : remove
    //         dispatch(action(articul))
    //     } else if (event.target.classList.contains('remove-from-cart')) {
    //         dispatch(remove(articul));
    //     }
    // }
    console.dir(cart)

    const cartWrapper = css`
        min-height: 500px;
    `
    const buttonStyles = css`  
        width: 260px;
        height: 52px;
        margin: 0 auto;
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
                {cart.map(item => console.log(item))}

                <Cart/>
                <Button css={buttonStyles}>
                    Оформити
                </Button>
            </Box>
        </div>
        // <div className='cart-field' onClick={clickHandler}>
        //     {Object.keys(cart).map(articul => {                
        //         const {image, title, cost} = goodsObj[articul]
        //         const quantity = cart[articul]

        //         // <Cart good={goodsObj[item]} quantity={cart[item]} />

        //         return (
        //             <Cart
        //                 key={title}
        //                 image={image}
        //                 title={title}
        //                 cost={cost}
        //                 count={quantity}
        //                 articul={articul}
        //             />)})}
        // </div>
    );

}
