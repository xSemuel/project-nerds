/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, RadioGroup, FormControlLabel, Radio, Button, ButtonGroup } from '@mui/material';


const sortWrapperItem = css`
    display: flex;
    justify-content: space-between;
`

// const buttonStyle = (selectedValue, value) => css`
//     background: ${selectedValue === value ? 'red' : ''};
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

export const SortItems = (props) => {

    const {optionsType, options2, onClick, onChange, selectedSortIcon} = props;

    const handleSortType = (event) => {
        event.preventDefault();
        onClick(event.target.value)
    }

    const handleIconSort = (event) => {
        event.preventDefault();
        onChange(event.target.value)
    }


    return (          
        <Box css={sortWrapperItem}>
            <ButtonGroup 
                aria-label="text button group" 
                onClick={handleSortType} 
                css={css`margin-bottom: 38px; margin-right: 8px;`}
                >

                {optionsType.map(({ text, value }) => 
                    // <Button css={buttonStyle(selectedValue, value)} key={value} value={value}>{text}</Button>
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
    )
}
