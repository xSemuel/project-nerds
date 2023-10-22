/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Pagination, Stack, Typography } from '@mui/material';


const paginationWrapper = css`
    align-items: center;
    margin-bottom: 18px;
`

export const PaginationList = ({funcChangePagination, currentPage, numberPage}) => {

    return ( 
        <Stack spacing={2} css={paginationWrapper}>
            <Typography>Сторінка: {currentPage}</Typography>
            <Pagination count={numberPage} page={currentPage} onChange={funcChangePagination} />
        </Stack>
    )
}