/** @jsxImportSource @emotion/react */
import { SortFilter } from "../../components";
import { Typography } from '@mui/material';
import { css } from '@emotion/react';


const SORT_TYPE = [
    {text: 'По ціні'},
    {text: 'По типу'},
    {text: 'По назві'},
]

const SORT_ICON = [
    {text: 'Значок зростання'},
    {text: 'Значок спадання'}

]


export const SortPanel = () => {
    return ( 
        <div css={css`margin-bottom: 38px;`}>
            <Typography variant="h3" className="visually-hidden">SortPanel</Typography>
            <SortFilter options1={SORT_TYPE} options2={SORT_ICON}/>
        </div>
    );
}
