import { useState } from 'react'
import { RangeFilter, RadioGroup, CheckboxGroup } from '../../components'

import styles from './FilterPanel.module.css'

const FILTER_RANGE = [
    {text: 'від', name: 'min-price', defaultValue: 0},
    {text: 'до', name: 'max-price', defaultValue: 15000}
]

const FILTER_NETWORK = [
    {text: 'Адаптивна', id: 'Adaptive1'},
    {text: 'Фіксована', id: 'Fixed2'},
    {text: 'Гумова', id: 'Rubber3'},
]

const FILTER_FEATURES = [
    {text: 'Слайдер', value: 'Slider', id: 'defaultCheck1'},
    {text: 'Блок преимуществ', value: 'blockFeatures', id: 'defaultCheck2'},
    {text: 'Новости', value: 'News', id: 'defaultCheck3'},
    {text: 'Галерея', value: 'Gallery', id: 'defaultCheck4'},
    {text: 'Корзина', value: 'Cart', id: 'defaultCheck5'},
]


export const FilterPanel = (props) => {
    const { onSubmit } = props

    const [filters, setFilters] = useState({})

    const applyFiltersHandler = (event) => {
        event.preventDefault();
        onSubmit(filters)
    }

    return ( 
        <div className={styles.wrapper}>
            <h1 className='visually-hidden'>FilterPanel</h1>
            <label htmlFor="customRange2" className="form-label visually-hidden">Фільтри:</label>
            <RangeFilter options={FILTER_RANGE} min={0} max={15000} onChange={() => {}} />
            <RadioGroup options={FILTER_NETWORK} onChange={() => {}} />
            <CheckboxGroup options={FILTER_FEATURES} onChange={() => {}} />
            {/* RadioGroup  */}
            {/* CheckboxGroup */}
            <button className="btn btn-primary" type="submit" onClick={applyFiltersHandler}>Показати</button> 
        </div>   
    )
}
