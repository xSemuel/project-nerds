/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, Box } from '@mui/material';

const titleFilterCost = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 38px;
`

export const SortFilter = () => {
    return (
        <Box>
            <Typography variant="h3" css={titleFilterCost}>Сортувати:</Typography>


        </Box>

    )
}
