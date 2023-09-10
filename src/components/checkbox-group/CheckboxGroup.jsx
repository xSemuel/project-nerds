// export const CheckboxGroup = (props) => {

//     const { options } = props;

//     return (
//         <div>
//             <form className="filter-cost mb-4">
//                 <legend>Особливості:</legend>

//                 {options.map(({ text, value, id }) =>

//                     <div key={text} className="form-check">                           
//                         <input className="form-check-input" type="checkbox" value={value} id={id} />
//                         <label className="form-check-label" htmlFor='defaultCheck1'>
//                             {text}
//                         </label>
//                     </div>
//                 )}
//             </form>
//         </div> 
//     )
// }

import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export const CheckboxGroup = (props) => {
    const { options, selectedValues, onChange } = props;

    const handleChange = (event) => {
      const { checked, value } = event.target
      const checkedValues = checked
        ? [...selectedValues, value]
        : selectedValues.filter((item) => item !== value )
      onChange(checkedValues);
    }

  return (
    <FormGroup >
      <legend>Особливості:</legend>
        {options.map(({ text, value }) =>
            <FormControlLabel
              key={value}
              control={<Checkbox onChange={handleChange} value={value} checked={selectedValues.includes(value)} />}
              label={text} />
        )}  

    </FormGroup>
  )
}