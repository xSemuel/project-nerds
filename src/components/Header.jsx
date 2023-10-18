/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS, Main_link, Cart_link } from '../constants';

import { Box, Badge, IconButton, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

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


  const styleCart = css`
    display: flex;
    gap: 5px;
  
  `
  const styleTextCart = css`
    margin-top: 7px;
  `

export const Header = () => {

    const countGoodsInCart = useSelector(selectedGoodsInCart)

    return ( 
        <nav className="navbar navbar-expand-lg pt-50 bg-color-main">
            
            <div className="container">
                <LightTooltip describeChild title="На головну">
                    <NavLink className="navbar-brand" to={Main_link.link}>
                        <img className="d-inline-block align-text-top" src={Main_link.logo} width="160" heigth="65"  alt="Nerds logo" />
                    </NavLink>
                </LightTooltip>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {NAVIGATION_LINKS.map(({ text, link }, index) => 
                            <li className="nav-item" key={index}><NavLink className="nav-link" to={link}>{text}</NavLink></li>
                        )}

                    </ul>

                    <NavLink className="nav-link" to={Cart_link.link} css={styleCart}>
                        <IconButton aria-label="cart">
                            <Badge badgeContent={countGoodsInCart.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <Box css={styleTextCart}>
                            {Cart_link.text}
                        </Box> 
                    </NavLink>                        

                </div>    
            </div>
        </nav>
    );
}
