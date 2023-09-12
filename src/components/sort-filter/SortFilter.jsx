/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const sortWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
`
const sortWrapperItem = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const titleFilterCost = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 38px;
`

export const SortFilter = ({options1, options2}) => {

    const handleIconSort = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }


    return (
        <Box css={sortWrapper}>
            <Typography variant="h3" css={titleFilterCost}>Сортувати:</Typography>
            <Box css={sortWrapperItem}>
                <RadioGroup 
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    >
                    {options1.map(({ text }) => 
                    <FormControlLabel key={text} control={<Radio />}  label={text} />
                    )}
                </RadioGroup>

                <RadioGroup
                    onChange={handleIconSort}
                    row 
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    >
                    {options2.map(({ text, value, icon, checkedIcon }) => 
                    <FormControlLabel key={text} value={value} control={<Radio icon={icon} checkedIcon={checkedIcon} />} />
                    )}
                </RadioGroup>
            </Box>


        </Box>

    )
}
