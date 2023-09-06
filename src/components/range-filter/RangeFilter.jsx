// options = [{ text, name, defaultValue }]

export const RangeFilter = (props) => {
    const { options, min, max, /*onChange*/ } = props

    // useId() hook

    return (
        <form className='filter-cost mb-4'>
            <legend>Вартість:</legend>
            <input
                type="range"
                className="form-range range-controls"
                // min="0"
                // max="15000"
                min={min}
                max={max}
                id="customRange"
                value=''
                // ref={inputRange}
            />
            
            <div className="d-flex justify-content-between">
                {options.map(({ text, name, defaultValue }) =>
                    <label key={text} className="d-flex align-content-center ">
                        <div className="">
                            <p className="">{text}</p>   
                        </div>
                        
                        <input
                            className='inut-range__number'
                            type="number"
                            name={name}
                            defaultValue={defaultValue}
                            id="customRange"
                        />
                    </label>
                )}
            </div>
        </form>
    )
}