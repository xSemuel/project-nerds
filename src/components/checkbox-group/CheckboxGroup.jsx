export const CheckboxGroup = (props) => {

    const { options } = props;

    return (
        <div>
            <h1>Check box</h1>
            <form>
                <h3>Особености:</h3>

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