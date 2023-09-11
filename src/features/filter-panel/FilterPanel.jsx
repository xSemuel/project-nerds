/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { RangeFilter, RadioButtonGroup, CheckboxGroup } from '../../components'
import { Button, Typography } from '@mui/material'
import { css } from '@emotion/react'


// const FILTER_RANGE = [
//     {text: 'від', indexValue: 0},
//     {text: 'до', indexValue: 1 }
// ]


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
        background: #a6a6a6;
        color: #ffffff;
    }

`
const FILTER_NETWORK = [
    {text: 'Адаптивна', valueNetwork: 'Adaptive1', defaultValue: 'Adaptive1'},
    {text: 'Фіксована', valueNetwork: 'Fixed2'},
    {text: 'Гумова', valueNetwork: 'Rubber3'},
]

const FILTER_FEATURES = [
    { text: 'Слайдер', value: 'Slider' },
    { text: 'Блок преимуществ', value: 'blockFeatures' },
    { text: 'Новости', value: 'News' },
    { text: 'Галерея', value: 'Gallery' },
    { text: 'Корзина', value: 'Cart' },
]

export const FilterPanel = (props) => {
    const { onSubmit } = props

    const [filters, setFilters] = useState({
        range: [1000, 11000],
        radio: FILTER_NETWORK[0].defaultValue,
        features: [FILTER_FEATURES[1].value]       
    })

    const applyFiltersHandler = (event) => {
        event.preventDefault();
        console.log("filters", filters)
        // onSubmit(filters)
    }

    const onChangeRangeHandler = (range) => {
        setFilters((prevState) => ({ ...prevState, range }))
    }

    const onChangeRadioHandler = (radio) => {
        console.log(radio)
        setFilters((prevState) => ({ ...prevState, radio }))
    }

    const onChangeCheckboxHandler = (features) => {
        setFilters((prevState) => ({ ...prevState, features }))
    }

    return ( 
        <div>
            <Typography variant="h3" className="visually-hidden">FilterPanel</Typography>
            <Typography className="visually-hidden">Фільтри:</Typography>
            <RangeFilter
                // options={FILTER_RANGE}
                min={0}
                max={15000}
                value={filters.range}
                onChange={onChangeRangeHandler}
            />
            <RadioButtonGroup
                options={FILTER_NETWORK}
                onChange={onChangeRadioHandler}
            />
            <CheckboxGroup
                options={FILTER_FEATURES}
                onChange={onChangeCheckboxHandler}
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
        </div>   
    )
}
