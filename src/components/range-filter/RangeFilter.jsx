/** @jsxImportSource @emotion/react */
import { Box, Slider, Paper, Stack, Typography, styled, TextField } from '@mui/material';
import { css } from '@emotion/react'

const titleFilterCost = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 38px;
`

const wrapperSlider = css`
    width: 260px; 
    height: 80px; 
    background: #eee; 
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
        <Box css={css` width: 260px; margin-bottom: 38px;`}>
            <Typography variant="h3" css={titleFilterCost}>Вартість:</Typography>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row"  justifyContent="space-between" useFlexGap flexWrap="wrap">
                <Item css={wrapperSlider} >
                    <Slider css={css` color: #00ca74; width: 200px;`}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={min}
                        max={max}         
                    />
                </Item>
                <Box spacing={{sm:1, xs: 1}} css={css`width: 120px; height: 38px;`}>
                    <Stack direction="row" justifyContent="space-between">
                        <TextField
                            value={value[0]}
                            id="0"
                            onChange={handleInputChange}
                            label="Від:"
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

                <Box direction="row" spacing={{sm:1, xs:1}} css={css`width: 120px; height: 38px;`}>
                    <Stack direction="row" justifyContent="space-between">
                        <TextField
                            value={value[1]}
                            id="1"
                            onChange={handleInputChange}
                            label="До:"
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
            </Stack>
        </Box>
    )
}
