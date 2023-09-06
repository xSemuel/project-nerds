import { useState } from 'react'
import { RangeFilter, RadioGroup } from '../../components'

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

export const FilterPanel = (props) => {
    const { onSubmit } = props

    const [filters, setFilters] = useState({})

    const applyFiltersHandler = () => {
        onSubmit(filters)
    }

    return ( 
        <div className={styles.wrapper}>
            <h1>FilterPanel</h1>
            <label htmlFor="customRange2" className="form-label">Пример диапазона</label>
            <RangeFilter options={FILTER_RANGE} min={0} max={15000} onChange={() => {}} />
            <RadioGroup options={FILTER_NETWORK} onChange={() => {}}/>
            {/* RadioGroup  */}
            {/* CheckboxGroup */}
            <button className="btn btn-primary" type="submit" onClick={applyFiltersHandler}>Показати</button> 
        </div>
        
    );
}
