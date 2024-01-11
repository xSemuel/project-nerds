/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Paper, Typography, Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import { links } from '../../constants';
import { selectedOrderListSlice, currentNumberOfOrder } from '../../store/slices';
import { useSelector, useDispatch } from 'react-redux';


    const buttonStyles = css`  
    width: 180px;
    height: 50px;
    margin: 0 auto;
    background: #fb565a;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    font-family: inherit;
    line-height: 18px;
    text-transform: uppercase;
    transition: .3s ease-in;
    &:hover {
        background: #d7373b;
        color: #ffffff;
    }
    display: flex;
    gap: 2px;
    `
    const orderInfoWrapper = css`
        margin: 10rem auto;
        width: 400px;
        height: 500px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        padding: 10px 10px;
    `
    const orderInfoHeadlines = css`
        color: #000;
        font-size: 16px;
        font-weight: 700;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
    `
    const orderInfoName = css`
        font-size: 14px;
        font-weight: 700;
        font-family: inherit;
        line-height: 16px;
        text-transform: uppercase;
    `
    const orderInfoThanks = css`
        text-align: center;
        color: #000;
        font-size: 14px;
        font-weight: 700;
        font-family: inherit;
        line-height: 16px;
        text-transform: uppercase;
    `
    const styleLink = css`
        text-decoration: none;
    `

export const OrderInfoSucess = ({options}) => {

    const {idOrder, totalSumOfOrder, firstName, lastName} = options;

    return ( 

        <Paper elevation={3} css={orderInfoWrapper}>
            <Typography css={orderInfoHeadlines}>Замовлення № {idOrder}</Typography> 
            <Typography css={orderInfoHeadlines}>Замовник:</Typography>
            <Typography css={orderInfoName}>Прізвище: {lastName} </Typography>
            <Typography css={orderInfoName}>Ім'я: {firstName}</Typography>
            <Typography css={orderInfoHeadlines}>Сумма замовлення: {totalSumOfOrder} грн.</Typography>
            <Typography css={orderInfoThanks}>Дякуємо за замовлення. Ваш товар буде надісланий найближчим часом!</Typography> 
            
            <NavLink css={styleLink} to={links.main}>
                <Button css={buttonStyles}>
                    Перейти на головну
                </Button>  
            </NavLink> 
            <NavLink css={styleLink} to={links.store}>
                <Button css={buttonStyles}>
                    Продовжити покупки
                </Button> 
            </NavLink>              
        </Paper>

    );
}

