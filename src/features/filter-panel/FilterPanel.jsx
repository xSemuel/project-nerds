import { useState } from 'react'
import { RangeFilter, RadioButtonGroup, CheckboxGroup } from '../../components'
import { Button } from '@mui/material'

import styles from './FilterPanel.module.css'

// const FILTER_RANGE = [
//     {text: 'від', indexValue: 0},
//     {text: 'до', indexValue: 1 }
// ]

const FILTER_NETWORK = [
    {text: 'Адаптивна', valueNetwork: 'Adaptive1', defaultValue: 'Adaptive1'},
    {text: 'Фіксована', valueNetwork: 'Fixed2'},
    {text: 'Гумова', valueNetwork: 'Rubber3'},
]

const FILTER_FEATURES = [
    {text: 'Слайдер', value: 'Slider', id: 'defaultCheck1' , defaultChecked: false},
    {text: 'Блок преимуществ', value: 'blockFeatures', id: 'defaultCheck2', defaultChecked: true},
    {text: 'Новости', value: 'News', id: 'defaultCheck3', defaultChecked: false},
    {text: 'Галерея', value: 'Gallery', id: 'defaultCheck4', defaultChecked: false},
    {text: 'Корзина', value: 'Cart', id: 'defaultCheck5', defaultChecked: false},
]


export const FilterPanel = (props) => {
    const { onSubmit } = props

    const [filters, setFilters] = useState({
        range: [1000, 11000],
        radio: FILTER_NETWORK[0].defaultValue, 
        checkbox: {
            Slider: false,
            blockFeatures: true, 
            News: false,
            Gallery: false,
            Cart: false, 
        },        
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

    const onChangeCheckboxHandler = (checkbox) => {
        setFilters((prevState) => ({ ...prevState, checkbox }))
    }

    console.log(filters)

    return ( 
        <div className={styles.wrapper}>
            <h1 className='visually-hidden'>FilterPanel</h1>
            <label htmlFor="customRange2" className="form-label visually-hidden">Фільтри:</label>
            <RangeFilter
                // options={FILTER_RANGE}
                min={0}
                max={15000}
                value={filters.range}
                onChange={onChangeRangeHandler}
            />
            <RadioButtonGroup options={FILTER_NETWORK} onChange={onChangeRadioHandler} />
            <CheckboxGroup options={FILTER_FEATURES} onChange={onChangeCheckboxHandler} />

            <Button type="submit" sx={{mx: 'auto', width: 260, height: 52, color: '#000', background: '#eee', fontSize: 16, fontWeight: 500 }} variant="contained" size="large" onClick={applyFiltersHandler}>
                Показати
            </Button>
        </div>   
    )
}
