// export const RadioGroup = (props) => {

//     const { options } = props;

//     return ( 
//         <div>
//             <form className="filter-cost mb-4">
//                 <legend>Сітка:</legend>

//                 {options.map(({ text, id }) =>

//                     <div key={text} className="form-check" >
//                         <input className="form-check-input" type="radio" name="flexRadioDefault" id={id} />
//                         <label className="form-check-label" htmlFor='flexRadioDefault1'>
//                             {text}
//                         </label>
//                     </div>
//                 )}
//             </form>
//         </div>
//     )
// }
 
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RadioButtonGroup = (props) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}