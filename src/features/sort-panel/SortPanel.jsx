// /** @jsxImportSource @emotion/react */
// import { useState } from 'react';
// import { SortFilter } from '../../components';
// import { Typography } from '@mui/material';
// import { css } from '@emotion/react';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// const SORT_TYPE = [
//     {text: 'По ціні', value: 'forPrice'},
//     {text: 'По типу', value: 'forType'},
//     {text: 'По назві', value: 'forName'},
// ]

// const SORT_ICON = [
//     {text: 'Значок зростання', value: 'up', icon: <ArrowDropUpIcon sx={{ color: '#e1e1e1'}} />, checkedIcon: <ArrowDropUpIcon sx={{color: '#d7373b'}} />},
//     {text: 'Значок спадання', value: 'down', icon: <ArrowDropDownIcon sx={{ color: '#e1e1e1'}} />, checkedIcon: <ArrowDropDownIcon sx={{color: '#d7373b'}} /> },
// ]


// export const SortPanel = (props) => {

//     // const { onChange } = props;

//     const [sorts, setSorts] = useState({
//         sortTypeFilter: SORT_TYPE[0].value,
//         sortIconFilter: SORT_ICON[0].value,      
//     })

//     const onClickSortTypeHandler = (sortTypeFilter) => {
//         setSorts((prevState) => ({ ...prevState, sortTypeFilter }))
//     }

//     const onChangeIconSortHandler = ( sortIconFilter) => {
//         setSorts((prevState) => ({ ...prevState, sortIconFilter }))
//     }

//     console.log(sorts)

//     return ( 
//         <div css={css`margin-bottom: 38px;`}>
//             <Typography variant="h3" className="visually-hidden">SortPanel</Typography>
//             <SortFilter options1={SORT_TYPE} options2={SORT_ICON} onClick={onClickSortTypeHandler} onChange={onChangeIconSortHandler} selectedSortIcon={SORT_ICON[0].value}/>
//         </div>
//     );
// }
