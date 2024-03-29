/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material'
import { css } from '@emotion/react';
import { RangeFilter, RadioButtonGroup, CheckboxGroup } from '../../components'
import { FILTER_RANGE, FILTER_NETWORK, FILTER_FEATURES } from '../../constants';


const titleFilterCost = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 38px;
    padding-top: 5px;
`
const titleFilterOther = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
`
const buttonStyles = css`  
    width: 260px;
    height: 52px;
    margin: 0 auto;
    background: #eee;
    color: #000;
    fontSize: 16px;
    fontWeight: 500;
    font-family: inherit;
    line-height: 18px;
    text-transform: uppercase;
    transition: .3s ease-in;
    &:hover {
        background: #d7373b;
        color: #ffffff;
    }
`

export const FilterPanel = (props) => {
    const { config, onChange } = props

    const [filters, setFilters] = useState({...config})

    useEffect(()=> {
        setFilters(config)
    }, [config])

    const applyFiltersHandler = (event) => {
        event.preventDefault();
        onChange(filters);
    }

    const onChangeHandler = (filterName, value) => {
        setFilters((prevState) => ({ ...prevState, [filterName]: value }))
    }

    return ( 
        <Box css={css`margin-bottom: 38px;`}>
            <Typography variant="h3" css={titleFilterCost}>Вартість:</Typography>
            <RangeFilter
                options={FILTER_RANGE}
                min={0}
                max={15000}
                value={filters.price}
                onChange={(value) => onChangeHandler('price', value)}
            />
            <Typography variant="h3" css={titleFilterOther}>Cітка:</Typography>
            <RadioButtonGroup
                options={FILTER_NETWORK}
                onChange={(value) => onChangeHandler('layout', value)}
            />
            <Typography variant="h3" css={titleFilterOther}>Особливості:</Typography>
            <CheckboxGroup
                options={FILTER_FEATURES}
                onChange={(value) => onChangeHandler('features', value)}
                selectedValues={filters.features}
            />
            <Button
                css={buttonStyles}
                variant="contained"
                size="large"
                onClick={applyFiltersHandler}
            >
                Показати
            </Button>
        </Box>   
    )
}
