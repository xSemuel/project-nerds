/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { PARTNERS_BLOCK } from '../constants';

    const clientsContainer = css`
        margin: 5rem auto;
        padding: 2px;
        min-height: 600px;
    `
    const clientsContentWrapper = css`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 0 auto;
    `
    const clientsTitle = css`
        color: #000;
        font-size: 24px;
        font-weight: 700;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
        text-align: center;
    `
    const clientsItemWrapper = css`
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `
    const clientsElement = css`
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 8px 10px;
    `
    const imgStyle = css`
        width: 200px;
        height: 150px;
    `
    const clientInfoStyle = css`
        color: #000;
        font-size: 14px;
        font-weight: 400;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
        text-align: center;
    `

export const Clients = () => {
    return ( 
        <Container fixed css={clientsContainer}>
            <Box css={clientsContentWrapper}>
                <Typography css={clientsTitle}>Наші клієнти:</Typography>

                <Box css={clientsItemWrapper}>
                    {PARTNERS_BLOCK.map(({ id, logo, alt, info }) => (

                        <Paper elevation={3} key={id} css={clientsElement}>
                            <Box css={imgStyle}
                                component="img"
                                src={logo}
                                alt={alt}
                            />
                            <Typography css={clientInfoStyle}>
                                {info}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}
