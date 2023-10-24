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
            display: flex;
            gap: 2px;
        `

        const wrapperDescCardStyle = css`
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            gap: 10px;
            padding: 5px 0;
            background-color: #eee;

            position: absolute;
            bottom: 0;
            top: 400px;
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

        const [ hide, setHide ] = useState(false);

        const watchCardInfo = (id) => {
            console.log(id)
            setHide(true)
        }

        const closeCardInfo = () => {
            setHide(false)
        }

    return ( 
        <Card 
            key={id} 
            css={wrapperCardItem} 
            onMouseEnter={() => {watchCardInfo(id)}} 
            onMouseLeave={() => {closeCardInfo(id)}}
        >
            <CardActionArea>

                <CardMedia
                    component="img"
                    height="618"
                    image={srcLogo}
                    alt={alt}
                />
                {hide && <Box css={wrapperDescCardStyle}>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6">
                        {descInfo}
                    </Typography>
                    <Button css={buttonStyles}
                        onClick={handleGoodCartAdd}
                        variant="submit"
                        size="large">
                        {descPrice}  
                        <Typography css={currencyButtonStyle} variant="body2">грн.</Typography>
                    </Button>
                </Box>}
            </CardActionArea>    
        </Card>
    )
}
 