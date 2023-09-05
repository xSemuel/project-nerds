// options = [{ text, name, defaultValue }]

export const RangeFilter = (props) => {
    const { options, min, max, /*onChange*/ } = props

    // useId() hook

    return (
        <div className='w-75'>
            {/* <label htmlFor="customRange2" className="form-label">Пример диапазона</label> */}
            <input
                type="range"
                className="form-range"
                // min="0"
                // max="15000"
                min={min}
                max={max}
                id="customRange"
                value=''
                // ref={inputRange}
            />
            
            <div className="d-flex justify-content-around">
                {options.map(({ text, name, defaultValue }) =>
                    <label key={text} className="d-flex w-50">
                        {text}
                        <input
                            className='store__input-range'
                            type="number"
                            name={name}
                            defaultValue={defaultValue}
                            id="customRange"
                        />
                    </label>
                )}
            </div>
        </div>
    )
}