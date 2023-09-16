/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonsShowCard } from './ButtonsShowCard';
import { CATALOG_GOODS } from "../../constants";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

const cardWrapper = css `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    row-gap: 30px;
    .list-reset();
    margin-top: 32px;
    margin-bottom: 58px;
`

export const CatalogCards = () => {
    return ( 
        <>
            <div css={cardWrapper}>
                {CATALOG_GOODS.map(({ title, srcLogo, alt, descName, descInfo, descAriaLabel, descPrice }) =>
                <Card key={title} sx={{ maxWidth: 360, maxHeight: 618 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="518"
                        image={srcLogo}
                        alt={alt}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {descInfo}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        {descPrice}
                        </Button>
                    </CardActions>
                </Card>
                )}
            </div>
           

            <ButtonsShowCard />
        </>
    )
}