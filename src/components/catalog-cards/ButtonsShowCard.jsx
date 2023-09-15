/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { createTheme, ThemeProvider, Typography, Pagination, Stack } from '@mui/material';

const paginationWrapper = css`
    align-items: center;
    margin-bottom: 18px;
`

export const ButtonsShowCard = () => {

    const theme = createTheme({
        Typography: {
            button: {
              fontSize: '1rem',
              color: 'yellow'
            },
            
          },
    
    
    })

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return ( 
        <ThemeProvider theme={theme}>
            <Stack spacing={2} css={paginationWrapper}>
                {/* <Typography>Page:{page}</Typography> */}
                <Pagination count={5} page={page} onChange={handleChange} />
            </Stack>


        </ThemeProvider>
    );
}