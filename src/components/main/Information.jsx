/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Grid, Typography, Box } from '@mui/material';

import { NavLink } from "react-router-dom";

import nerdsIllustration from '../../images/nerds-illustration.png';
import rectangle from '../../images/Rectangle10.svg';

import { STATISTIC_LIST, ORDER_LIST_INFO } from '../../constants';


    const containerTitle = css`
        color: #000;
        font-family: Roboto;
        font-size: 45px;
        font-weight: 500;
        line-height: 45px;
    `
    const infoDescription = css`
        margin-top: 1rem;
        color: #283136;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    `
    const wrapperItemInfo = css`
        margin-top: 40px;
    `
    const orderTitle = css`
        color: #283136;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
    `
    const orderList = css`
        color: #283136;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    `
    const itemStyle = css`
        display: flex;
        gap: 6px;
        margin: 10px 0;
    `
// -----------------------------------------------

    const statisticTitle = css`
        margin-top: 30px;
        color: #000;
        text-align: center;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
    `
    const statisticPercentWrapper = css`
        display: flex;
        justify-content: center;
        gap: 2px;
    `
    const percentNumberStyle = css`
        padding-top: 10px;
        color: #000;
        font-family: Roboto;
        font-size: 45px;
        font-weight: 700;
        line-height: 64px; 
    `
    const percentStyle = css`
        padding-bottom: 10px; 
        color: #000;
        font-family: Roboto;
        font-size: 26px;
        font-weight: 700;
        line-height: 40px;
    `
    const statisticInfo = css`
        color: #283136;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
    `

export const Information = () => {
    return ( 
        <Container fixed>   
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Box>
                        <Typography css={containerTitle}>
                            Ми — маленька, але горда<br />дизайн-студія<br /> з Уганди.
                        </Typography>
                        <Typography css={infoDescription}>
                            Дотримуємось принципів мінімалізму та чистоти. Ставимо математичний розрахунок<br /> вище креативу. Працюємо не покладаючи рук, як роботи.
                        </Typography>
                    </Box>
                    <Box css={wrapperItemInfo}>
                        <Typography css={orderTitle}>                           
                            Виконуємо замовлення на разробку:
                        </Typography>
                        {ORDER_LIST_INFO.map(({id, text}) => (
                            <Box key={id} css={itemStyle}>
                                <Box 
                                    component='img' 
                                    src={rectangle} 
                                    alt='rectangle'
                                />
                                <Typography css={orderList}>
                                    {text}
                                </Typography> 
                            </Box>
                        ))}
                    </Box>
                </Grid>
            
                <Grid item xs={4}>
                    <NavLink to="!#">
                        <Box 
                            component='img' 
                            src={nerdsIllustration} 
                            width="360" 
                            heigth="208"  
                            alt="Nerds-illustration" 
                        />
                    </NavLink>
                    <Typography css={statisticTitle}>
                        з 2004 року Любимо точність у всьому:
                    </Typography>
                    <Grid container spacing={3}>
                        {STATISTIC_LIST.map(({id, percent, percentNum, text}) => (
                            <Grid item xs={4} key={id}>
                                <Box css={statisticPercentWrapper}>
                                    <Typography css={percentNumberStyle}>{percentNum}</Typography>
                                    <Typography css={percentStyle}>{percent}</Typography>
                                </Box>
                                <Typography css={statisticInfo}>{text}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container> 
    )
}
