/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Card, CardMedia, Typography, Button, CardActionArea, Box } from '@mui/material';

import { useState } from 'react';


export const CardItem = ({options, handleGoodCartAdd }) => {
    const { id, title, srcLogo, alt, descInfo, descPrice } = options;

        const buttonStyles = css`  
            width: 160px;
            height: 40px;
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

        const wrapperDescCardStyle = css`
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            gap: 10px;
            padding: 25px 0;
            background-color: #eee;
            position: absolute;
            bottom: 0;
            animation: 750ms show linear;
            @keyframes show {
                from { opacity: 0; }
                to { opacity: 1;}
            }
        `
        const currencyButtonStyle = css`
            font-size: 11px;
            padding-top: 4px;
        `
        const wrapperCardItem = css`
            position: relative;
            max-height: 618px;
            max-width: 360px;
        `
        const descInfostyle = css`
            text-align: center;
        `

        const [ watchCardInfo, setWatchCardInfo ] = useState(false);

        const openCardInfo = () => {
            setWatchCardInfo(true)
        }

        const closeCardInfo = () => {
            setWatchCardInfo(false)
        }

    return ( 
        <Card 
            key={id} 
            css={wrapperCardItem} 
            onMouseEnter={openCardInfo} 
            onMouseLeave={closeCardInfo}
        >
            <CardActionArea>

                <CardMedia
                    component="img"
                    height="618"
                    image={srcLogo}
                    alt={alt}
                />
            </CardActionArea>    
            {watchCardInfo && <Box css={wrapperDescCardStyle}>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" css={descInfostyle}>
                        {descInfo}
                    </Typography>
                    <Button css={buttonStyles}
                        onClick={handleGoodCartAdd}
                        size="large">
                        {descPrice}  
                        <Typography css={currencyButtonStyle} variant="body2">грн.</Typography>
                    </Button>
                </Box>}
        </Card>
    )
}
