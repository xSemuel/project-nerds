/** @jsxImportSource @emotion/react */
import { Box, Slider, Paper, Stack, styled, TextField } from '@mui/material';
import { css } from '@emotion/react';
import { useState } from 'react';
// import RangeInput from './RangeInput';

const wrapperSlider = css`
    width: 260px; 
    height: 80px; 
    padding-top: 24px; 
    border-radius: 8px;
`

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
  }));


export const RangeFilter = (props) => {
    const { value, min, max, onChange, options } = props;

    const handleChange = (event, newValue) => {
        onChange(newValue)
    };

    // const handleInputChange = (event) => {
    //     let newState = [];
    //     const newNum = +event.currentTarget.value;
    //     if (event.currentTarget.id === '0') {
    //         newState = [newNum, value[1]]       
    //     } else {
    //         newState = [value[0], newNum]
    //     }
    //     onChange(newState)
    // };

    // const validateFunc = (e) => {
    //     console.log(e)
    // }

    const [valueError, setValueError] = useState('')

    const validateFunc = (e, minRange={min}, maxRange={max}) => {
        const newNum = +e.currentTarget.value;
        const id = e.currentTarget.id;
        console.log(newNum, id)
        if (id === '0') {
            if (newNum <= 0) setValueError(`Мінімальне число не може бути менше ${minRange}`)
            if (newNum >= value[1]) setValueError(`Мінімальне число не може бути більше ${value[1]}`)
            else handleInputChange(id, newNum)            
        } else {
            if (newNum > 15000) setValueError(`Мaксимальне число не може бути більше ${maxRange}`)
            if (newNum <= value[0]) setValueError(`Мaксимальне число не може бути менше ${value[0]}`)
            else {
                handleInputChange(id, newNum)
            }
        }
    }

    const handleInputChange = (id, newNum) => {
        setValueError('')
        let newState = [];
        id === '0' ? newState = [newNum, value[1]] : newState = [value[0], newNum];     
        onChange(newState)
    };

    return (
        <Box css={css` width: 260px; margin-bottom: 38px;`}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row"  justifyContent="space-between" useFlexGap flexWrap="wrap">
                <Item css={wrapperSlider} >
                    <Slider css={css` color: #d7373b; width: 200px;`}
                        value={value}
                        onChange={handleChange}
                        min={min}
                        max={max}         
                    />
                </Item>

                {options.map(({text, indexValue}) => 
                    <Box key={text} direction="row" spacing={{sm:1, xs:1}} css={css`width: 120px; height: 38px;`}>
                        <Stack direction="row" justifyContent="space-between">
                            <TextField
                                value={value[indexValue]}
                                id={indexValue}
                                onChange={validateFunc}
                                label={text}
                                type="number"
                                size="small"
                                color="error"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    min: {min},
                                    max: {max},
                                }}
                            />
                        </Stack>
                    </Box>  
                )}

                {valueError}

            </Stack>
        </Box>
    )
}


