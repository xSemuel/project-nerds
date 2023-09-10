import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

export const RadioButtonGroup = (props) => {

  const { options, onChange, defaultValue = options[0].valueNetwork } = props;

  const handleChange = (event) => {
    const valueRadioGroup = event.currentTarget.value;
    onChange(valueRadioGroup);
  };

  return (
    <FormControl sx={{mb: 4}}>
      <FormLabel id="demo-radio-buttons-group-label">Cітка:</FormLabel>
      <legend>Сітка:</legend> {/* Убрать */}
      <RadioGroup 
        onChange={handleChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
        >

        {options.map(({ text, valueNetwork }) => 
          <FormControlLabel key={valueNetwork} value={valueNetwork} control={<Radio />} label={text} />
        )}

      </RadioGroup>
    </FormControl>
  );
}