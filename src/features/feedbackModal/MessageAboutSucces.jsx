/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

const messageStyle = css`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 18px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 150px;
`

export const MessageAboutSucces = () => {
    return ( 
        <Typography css={messageStyle}>Повідомлення відправлене!</Typography>
    );
}
