import { css, Theme } from '@emotion/react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {  Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


// const boxStyles = (theme: Theme) => css`  
//     padding-left: ${theme.spacing(2)};
// `

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
  }));

function valuetext(value) {
  return `${value}°C`;
}

export const RangeFilter = (props) => {
    const { value, min, max, onChange } = props;

    const handleChange = (event, newValue) => {
        onChange(newValue)
    };

    const handleInputChange = (event) => {
        let newState = [];
        const newNum = +event.currentTarget.value;
        if (event.currentTarget.id === '0') {
            newState = [newNum, value[1]]       
        } else {
            newState = [value[0], newNum]
        }
        onChange(newState)
    };

    return (
        <form className='filter-cost mb-4'>
            <legend>Вартість:</legend>
            {/* <Box css={boxStyles}  sx={{ width: 260 }}> */}
            <Box sx={{ width: 260 }}>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row"  justifyContent="space-between" useFlexGap flexWrap="wrap">
                    <Item sx={{ width: 260, height: 80, background: '#eee', pt: 3 }} >
                        <Slider sx={{ color: '#ffffff', width: 200 }}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={min}
                            max={max}         
                        />
                    </Item>

                    <Box spacing={{sm:1, xs: 1}} sx={{width: 120, height: 38}}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography sx={{width: 40, height: 38, mr: 1, pt: 1}} noWrap>Від:</Typography>
                            <Input sx={{width: 76, height: 38, background: '#eee', alignText: 'center', pl: 1}}
                                value={value[0]}
                                size="small"
                                id='0'
                                onChange={handleInputChange}
                                inputProps={{
                                min: {min},
                                max: {max},
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                        </Stack>

                    </Box>

                    <Box direction="row" spacing={{sm:1, xs:1}} sx={{width: 120, height: 38}}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography  sx={{width: 40, height: 38, mr: 1, pt: 1}} noWrap>До:</Typography>
                            <Input sx={{width: 76, height: 38, background: '#eee'}}
                                value={value[1]}
                                size="small"
                                id='1'
                                onChange={handleInputChange}
                                inputProps={{
                                min: {min},
                                max: {max},
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                        </Stack>
                    </Box>      
                </Stack>
            </Box>
        </form>
    );
}
