/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, Box } from '@mui/material';

import rectangle from './img/Rectangle10.svg';

import { ORDER_LIST_INFO } from '../../../constants';

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

export const InformationList = () => {
    return ( 
        <>
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
        </>
    );
}
