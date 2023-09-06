export const RadioGroup = (props) => {

    const { options } = props;

    return ( 
        <div>
            <form className="filter-cost mb-4">
                <legend>Сітка:</legend>

                {options.map(({ text, id }) =>

                    <div key={text} className="form-check" >
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id={id} />
                        <label className="form-check-label" htmlFor='flexRadioDefault1'>
                            {text}
                        </label>
                    </div>
                )}
            </form>
        </div>
    )
}
 
