/** @jsxImportSource @emotion/react */
import { SortFilter } from "../../components";
import { Typography } from '@mui/material';
import { css } from '@emotion/react';

export const SortPanel = () => {
    return ( 
        <div css={css`margin-bottom: 38px;`}>
            <Typography variant="h3" className="visually-hidden">SortPanel</Typography>
            <SortFilter />
        </div>
    );
}
