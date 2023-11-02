/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Typography, Box } from '@mui/material';
import notFound from '../images/404NotFound.png';

    const notFoundContainer = css`
        margin: 5rem auto;
        padding: 2px;
        min-height: 600px;
    `
    const notFoundTitle = css`
        color: #000;
        font-size: 24px;
        font-weight: 700;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
        text-align: center;
    `

export const NotFound = () => {
    return ( 
        <Container fixed css={notFoundContainer}>
            <Typography css={notFoundTitle}> 
                Помилка 404. Сторінка на яку Ви посилаєтесь не знайдено!
            </Typography>
            <Box 
                component='img'
                src={notFound} 
                alt="Сторінка не знайдена" 
            />
        </Container>
    );
}