
//     // useId() hook

import { useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';

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
        console.log(event.target.value)
        console.log(event.currentTarget.id)
        // setValue(event.target.value === '' ? 0 : Number(event.target.value));
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
            <Box className="form-range" sx={{ width: 260 }}>
            <Slider sx={{color: 'white'}}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={min}
                max={max}         
            />
            </Box>

            <Grid>
                <Input sx={{width: 22}}
                    value={value[0]}
                    size="small"
                    id='0'
                    onChange={handleInputChange}
                    // onBlur={handleBlur}
                    inputProps={{
                    min: {min},
                    max: {max},
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
                <Input sx={{width: 22}}
                    value={value[1]}
                    size="small"
                    id='1'
                    onChange={handleInputChange}
                    // onBlur={handleBlur}
                    inputProps={{
                    min: {min},
                    max: {max},
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>
        </form>
    );
}
