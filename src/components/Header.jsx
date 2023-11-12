/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { NavLink } from "react-router-dom";
import tooltipClasses from '@mui/material/Tooltip';
import { AppBar, Box, Toolbar, Container, Button, Tooltip, Badge, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import IconButton from '@mui/material/IconButton';

import { NAVIGATION_LINKS, Main_link, Cart_link } from '../constants';

import { selectedGoodsInCart } from '../store/slices';
import { useSelector } from 'react-redux';


    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 16,
        },
    }));

    const headerWrapper = css`
        padding-top: 8px;
        background-color: #EEE;
        height: 80px;
    `
    const navigatonWrapper = css`
        display: flex;
        gap: 200px;
    `
    const navigatonMenuWrapper = css`
        display: flex;
        flex-grow: 2;
        justify-content: space-between;
    `
    const styleCart = css`
        display: flex;
        gap: 5px;
    
    `
    const styleTextCart = css`
        margin-top: 7px;
        color: #000;
        text-align: right;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        text-transform: uppercase;
    `
    const navMenuItem = css`
        color: #000;
        text-align: right;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        text-transform: uppercase;
        text-decoration: none;
    `

export const Header = () => {

    const countGoodsInCart = useSelector(selectedGoodsInCart)

    return (
        <AppBar position="static" css={headerWrapper}>
            <Container fixed>
                <Toolbar disableGutters css={navigatonWrapper}>

                    <LightTooltip describeChild title="На головну">
                        <NavLink to={Main_link.link}>
                            <Box 
                                component="img" 
                                src={Main_link.logo} 
                                width="160" 
                                heigth="65"  
                                alt="Nerds logo" 
                            />
                        </NavLink>
                    </LightTooltip>

                    <Box css={navigatonMenuWrapper}>
                        <Box>
                            {NAVIGATION_LINKS.map(({text, link}) => (
                                <Button
                                    key={text}
                                >
                                    <NavLink to={link} css={navMenuItem}>
                                        {text}
                                    </NavLink>
                                </Button>
                            ))}
                        </Box>
                        <NavLink className="nav-link" to={Cart_link.link} css={styleCart}>
                            <IconButton aria-label="cart">
                                <Badge badgeContent={countGoodsInCart.length} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                            <Button css={styleTextCart}>
                                {Cart_link.text}
                            </Button> 
                        </NavLink>  
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}