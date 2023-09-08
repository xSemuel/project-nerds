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
import { useState } from 'react';

export const CheckboxGroup = (props) => {

    const { options, onChange } = props;
    const [checked, setChecked] = useState({
                                            Slider: false,
                                            blockFeatures: true, 
                                            News: false,
                                            Gallery: false,
                                            Cart: false,     
                                        });

    const changeGlobalState = () => {
        onChange({checked});
    }

    const handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { id } = target;
        setChecked((prevState) => ({ ...prevState, [id]: value }));

  
        changeGlobalState()
    }

  return (
    <FormGroup >
      <legend>Особливості:</legend>
        {options.map(({ text, defaultChecked, value, id }) =>
            <FormControlLabel key={text} control={<Checkbox id={value} onChange={handleChange} checked={checked[value]} />} label={text} />
        )}  

    </FormGroup>
  )
}