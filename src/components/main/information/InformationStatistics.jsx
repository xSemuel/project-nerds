/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid, Typography, Box } from '@mui/material';

import { NavLink } from "react-router-dom";
import nerdsIllustration from './img/nerds-illustration.png';
import { STATISTIC_LIST } from '../../../constants';

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

export const InformationStatistics = () => {
    return ( 
        <>
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
        </>
    );
}