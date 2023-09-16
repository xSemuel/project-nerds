/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';

export const CardItem = ({options}) => {
    const { title, srcLogo, alt, descInfo, descPrice } = options;

    const [ showCost, setShowCost ] = useState(false)
    
    const styledShowCost = (e) => {
        console.log(e.type)
        e.type === 'mouseenter' ? setShowCost(true) : setShowCost(false)
    }

    const itemCost = css `
    .MuiCardActions {
        display: absolute;
        position: fixed;
        max-width: 360px;
        max-height: 420px;
        background-color: #eee;  
        z-index: -5999;
        padding-bottom: 300px;
    }  
    `

    return ( 
        <>
            <Card key={title} sx={{ maxWidth: 360, maxHeight: 618 }} onMouseEnter={styledShowCost} onMouseLeave={styledShowCost}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="418"
                    image={srcLogo}
                    alt={alt}
                    />
                    {showCost && (<CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descInfo}
                    </Typography>
                    </CardContent>)}
                </CardActionArea>
                {showCost && (<CardActions css={itemCost}>
                    <Button size="small" color="primary">
                    {descPrice}
                    </Button>
                </CardActions>)}
            </Card>
        </>
    )
}
 