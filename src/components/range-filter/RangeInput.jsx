
// /** @jsxImportSource @emotion/react */
// import { Box, Stack, TextField } from '@mui/material';
// import { css } from '@emotion/react';


// const RangeInput = (props) => {
//     console.log(props)
//     const {options, min, max, value } = props;
//     return ( 

//         <div>
//             {options.map(({text, indexValue}) => 
//                 <Box key={text} direction="row" spacing={{sm:1, xs:1}} css={css`width: 120px; height: 38px;`}>
//                     <Stack direction="row" justifyContent="space-between">
//                         <TextField
//                             value={value[{indexValue}]}
//                             id={indexValue}
//                             // onChange={handleInputChange}
//                             label={text}
//                             type="number"
//                             size="small"
//                             color="error"
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                             inputProps={{
//                                 min: {min},
//                                 max: {max},
//                             }}
//                         />
//                     </Stack>
//                 </Box>  
//             )}

//         </div>
//     )
// }
 
// export default RangeInput;