import { useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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

    const { options, min, max, /*onChange*/ } = props;



    const [value, setValue] = useState([3000, 12000]);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        console.log(event)
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        let newState = [];
        const newNum = +event.currentTarget.value;
        if (event.currentTarget.id === '0') {
            newState = [newNum, value[1]]       
        } else {
            newState = [value[0], newNum]
        }
        setValue(newState)
    };

    return (
        <form className='filter-cost mb-4'>
            <legend>Вартість:</legend>
            <Box  sx={{ width: 260 }}>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row"  justifyContent="space-between" useFlexGap flexWrap="wrap">
                    <Item sx={{ width: 260, height: 80, background: '#eee', pt: 3}} >
                        <Slider sx={{ color: '#ffffff' }}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={min}
                            max={max}         
                        />
                    </Item>

                    <Item spacing={{sm:1, xs: 1}} sx={{width: 120, height: 38}}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography sx={{width: 40, height: 20, mr: 1}} noWrap>Від:</Typography>
                            <Input sx={{width: 76, height: 20, background: '#eee'}}
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

                    </Item>

                    <Item direction="row" spacing={{sm:1, xs:1}} sx={{width: 120, height: 38}}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography sx={{width: 40, height: 20, mr: 1}} noWrap>До:</Typography>
                            <Input sx={{width: 76, height: 20, background: '#eee'}}
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
                    </Item>      
                </Stack>
            </Box>
        </form>
    );
}
