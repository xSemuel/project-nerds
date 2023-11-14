/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { NavLink } from "react-router-dom";
import { SOCIAL_ICONS } from "../constants";
import { BottomNavigation, Box, Typography, Container } from '@mui/material';


    const footerWrapper = css`
        background-color: #EEE;
        height: 225px;
        margin-top: 24px;
    `
    const footerWrapperContainer = css`
        display: flex;
        padding-top: 75px;
    `
    const socialList = css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 9px;
    `
    const btnSocial = css`
        background-color: #e1e1e1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 81px;
        height: 81px;
        box-sizing: border-box;
        border-radius: 50%; 
        &:hover {
            background-color: #e74246;
        }
        &:active {
            background-color: #d7373b;
            box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.1);
        }
    `
    const socialInner = css`
        padding-top: 7px;
        padding-left: 139px;
    `
    const socialSlogan = css`
        color: #444444;
        font-weight: 700;
        font-size: 36px;
        line-height: 36px;
        margin: 0;
        margin-bottom: 10px;
    `
    const socialText = css`
        line-height: 22px;
        color: #444444;
        margin: 0;
    `
    
export const Footer = () => {
    return (
        <BottomNavigation position="static" css={footerWrapper}>
            <Container fixed css={footerWrapperContainer}>
                <Box css={socialList}>
                    {SOCIAL_ICONS.map(({ logo, alt, link, width, height, id }) =>

                        <NavLink key={id} css={btnSocial} to={link} >
                            <Box
                                component="img"
                                src={logo}
                                width={width}
                                height={height}
                                alt={alt}
                            />
                        </NavLink>

                    )}
                </Box>

                <Box css={socialInner}>
                    <Typography css={socialSlogan}>
                        Давайте товаришувати, це вигідно!
                    </Typography>
                    <Typography css={socialText}>
                        Знижка 10% для друзів з соціальних мереж.
                    </Typography>
                </Box>
            </Container>
        </BottomNavigation>
    );
}
 
