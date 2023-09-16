import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

export const CardItem = ({options}) => {
    const { title, srcLogo, alt, descInfo, descPrice } = options;

    return ( 
        <>
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
        </>
    )
}
 