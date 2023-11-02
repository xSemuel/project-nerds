/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Advantage, Carousel, Information, Partner } from '../main';
import { Container, Box } from '@mui/material';

    const styleWrapperDivided = css`
        margin: 3rem auto;
    `
    const styleDivided = css`
        border: solid 2px #eee;
    `

export const Home = () => {
    return ( 
        <Box>    
            <Carousel />
            <Advantage />  
            <Container fixed css={styleWrapperDivided}>
                <Box css={styleDivided}/>
            </Container>
            <Information />
            <Container fixed css={styleWrapperDivided}>
                <Box css={styleDivided}/>
            </Container>
            <Partner />
            <Container fixed css={styleWrapperDivided}>
                <Box css={styleDivided}/>
            </Container>           
        </Box>
    );
}
