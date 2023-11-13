/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Typography, Paper, Box } from '@mui/material';
import aboutUs from '../images/aboutUs.jpg';

import { STUDIO_BLOCK } from '../constants';

    const studioContainer = css`
    margin: 5rem auto;
    padding: 2px;
    min-height: 600px;
    `
    const studioWrapper = css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    `
    const studioInfoWrapper = css`
    padding: 28px 8px 8px 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 600px;
    `
    const contactsTitle = css`
    color: #000;
    font-size: 24px;
    font-weight: 700;
    font-family: inherit;
    line-height: 18px;
    text-transform: uppercase;
    text-align: center;
    `
    const studioDescription = css`
        color: #000;
        font-size: 16px;
        font-weight: 500;
        font-family: inherit;
        line-height: 18px;
        text-transform: uppercase;
    `

export const Studio = () => {
    return ( 
        <Container fixed css={studioContainer}>
            <Box css={studioWrapper}>
                <Typography css={contactsTitle}>Про нашу студію:</Typography>

                <Paper elevation={3} css={studioInfoWrapper}>  
                    <Box
                        component='img'
                        src={aboutUs}
                        alt="about us"
                    />

                    {STUDIO_BLOCK.map(({ id, text }) => (

                        <Typography css={studioDescription} key={id}>
                            {text}
                        </Typography>

                    ))}
                    
                </Paper>             
            </Box>
        </Container>
    );
}