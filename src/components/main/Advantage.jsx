/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, Button, Box, Card } from '@mui/material';

import { NavLink } from "react-router-dom";
import { ADVANTAGE_BLOCK } from '../../constants';

    const cardStyle = css`
        width: 18.75rem; 
        height: 21.87rem;
    `    
    const buttonStyles = css`  
        width: 160px;
        height: 50px;
        margin-top: 10px;
        margin: 0 auto;
        color: #FFF;
        text-align: center;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        text-transform: uppercase;
        transition: .3s ease-in;
        &:hover {
            background: #d7373b;
            color: #ffffff;
        } 
    `
    const imgAdvantageStyle = css`
        height: 146px; 
        width: 300px;

    `
    const advantageTitle = css`
        color: #000;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        text-transform: uppercase;
    `

    const advantageDesc = css`
        text-align: center;
        color: #283136;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; 
    `
    const wrapperAdvantageInfo = css`
        padding: 25px 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: space-beetwen;
        align-items: center;
    `


export const Advantage = () => {
    return ( 
        <Box className="container mt-5 d-flex justify-content-between">
            
            {ADVANTAGE_BLOCK.map(({ title, img, info, alt, btnInfo, btnColor, link }) => 
                <Card key={title} css={cardStyle}> 
                    <Box css={imgAdvantageStyle}
                        component="img"
                        src={img}
                        alt={alt}
                    />          
                    <Box css={wrapperAdvantageInfo}>
                        <Typography css={advantageTitle}>{title}</Typography>
                        <Typography css={advantageDesc}>{info}</Typography>
                        <NavLink to={link}>
                            <Button css={buttonStyles} sx={{backgroundColor: btnColor }}>
                                {btnInfo}
                            </Button>
                        </NavLink>
                    </Box>
                </Card>
            )}

        </Box>

    )
}
