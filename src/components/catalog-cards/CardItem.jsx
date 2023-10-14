/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Card, CardMedia, Typography, Button, CardActionArea, Box } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const CardItem = ({options, goodCartAdd}) => {
    const { title, srcLogo, alt, descInfo, descPrice } = options;

    const CardTooltip = styled(({ className, ...props }) => (
            <Tooltip {...props} classes={{ popper: className }} />
        ))({
            [`& .${tooltipClasses.tooltip}`]: {
                maxWidth: 360,
                maxHeight: 420,
                backgroundColor: `#eee`,
                color: "black"
            },
        });

        const buttonStyles = css`  
            width: 160px;
            height: 40px;
            margin: 0 auto;
            background: #eee;
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
        `

        const currencyButtonStyle = css`
            font-size: 11px;
            padding-top: 4px;
        `

    return ( 
        <Card key={title} sx={{ maxWidth: 360, maxHeight: 618 }}>
            <CardActionArea>
                <CardTooltip placement="bottom-start" title={
                    <Box css={wrapperDescCardStyle}>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h6">
                            {descInfo}
                        </Typography>
                        <Button css={buttonStyles}
                            value={title}
                            onClick={goodCartAdd}
                            variant="submit"
                            size="large">
                            {descPrice}  
                            <Typography css={currencyButtonStyle} variant="body2">грн.</Typography>
                        </Button>
                    </Box>
                }>
                    <CardMedia
                    component="img"
                    height="418"
                    image={srcLogo}
                    alt={alt}
                    />
                </CardTooltip>
            </CardActionArea>    
        </Card>
    )
}
 