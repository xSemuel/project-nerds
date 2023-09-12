/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, Box, RadioGroup, FormControlLabel, Radio, Button, ButtonGroup } from '@mui/material';

const sortWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: top;
    min-height: 70px;
`
const sortWrapperItem = css`
    display: flex;
    justify-content: space-between;
`
const titleFilterCost = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 38px;
    padding-top: 5px;
`
const buttonStyle = css`
    color: #e1e1e1;
    border: none;
    &:hover {
        color: #a6a6a6;
        border: none;
    }
    &:active {
        color: #d7373b;
        border: none;
    }
`

export const SortFilter = (props) => {

    const {options1, options2, onClick, onChange, selectedSortIcon} = props;

    const handleSortType = (event) => {
        event.preventDefault();
        onClick(event.target.value)
    }

    const handleIconSort = (event) => {
        event.preventDefault();
        onChange(event.target.value)
    }


    return (
        <Box css={sortWrapper}>
            <Typography variant="h3" css={titleFilterCost}>Сортувати:</Typography>
            <Box css={sortWrapperItem}>
                <ButtonGroup 
                    aria-label="text button group" 
                    onClick={handleSortType} 
                    css={css`margin-bottom: 38px; margin-right: 8px;`}
                    >

                    {options1.map(({ text, value }) => 
                        <Button css={buttonStyle} key={value} value={value}>{text}</Button>
                    )}
                </ButtonGroup>

                <RadioGroup
                    onChange={handleIconSort}
                    row 
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue={selectedSortIcon}
                    css={css`margin-bottom: 38px`}
                    >
                        
                    {options2.map(({ text, value, icon, checkedIcon }) => 
                    <FormControlLabel key={text} value={value} control={<Radio icon={icon} checkedIcon={checkedIcon} />} />
                    )}
                </RadioGroup>
            </Box>
        </Box>
    )
}
