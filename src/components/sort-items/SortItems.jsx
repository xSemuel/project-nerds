/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, RadioGroup, FormControlLabel, Radio, Button, ButtonGroup } from '@mui/material';


const sortWrapperItem = css`
    display: flex;
    justify-content: space-between;
`

const buttonStyle = (selectedValue, value) => css`
    background: ${selectedValue === value ? '#d7373b' : null};
    color: ${selectedValue === value ? '#ffffff' : '#e1e1e1'};
    border: none;
    &:hover {
        border: none;
        background: #e74246;
    }
    &:active {
        color: #d7373b;
        border: none;
    }
`

export const SortItems = (props) => {

    const {optionsType, optionsDir, onClick, onChange, selectedSortDir, selectedSortType} = props;

    console.log(selectedSortDir)

    const handleSortType = (event) => {
        event.preventDefault();
        onClick(event.target.value)
    }

    const handleSortDir = (event) => {
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
                    <Button css={buttonStyle(selectedSortType, value)} key={value} value={value}>{text}</Button>
                )}
            </ButtonGroup>

            <RadioGroup
                onChange={handleSortDir}
                row 
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="controlled-radio-buttons-group"
                value={selectedSortDir}
                css={css`margin-bottom: 38px`}
                >
                    
                {optionsDir.map(({ text, value, icon, checkedIcon }) => 
                    <FormControlLabel key={text} value={value} control={<Radio icon={icon} checkedIcon={checkedIcon} />} />
                )}
            </RadioGroup>
        </Box>
    )
}
