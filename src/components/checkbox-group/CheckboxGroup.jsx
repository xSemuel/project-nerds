export const CheckboxGroup = (props) => {

    const { options } = props;

    return (
        <div>
            <form className="filter-cost mb-4">
                <legend>Особливості:</legend>

                {options.map(({ text, value, id }) =>

                    <div key={text} className="form-check">                           
                        <input className="form-check-input" type="checkbox" value={value} id={id} />
                        <label className="form-check-label" htmlFor='defaultCheck1'>
                            {text}
                        </label>
                    </div>
                )}
            </form>
        </div> 
    )
}