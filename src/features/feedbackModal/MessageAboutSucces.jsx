/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Typography } from '@mui/material';


const messageStyle = css`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    text-transform: uppercase;
`


export const MessageAboutSucces = () => {
    return ( 
        <Typography css={messageStyle}>Повідомлення відправлене!</Typography>
    );
}
