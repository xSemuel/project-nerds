/** @jsxImportSource @emotion/react */
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { css } from '@emotion/react'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';


const wrapperRadioButtonGroup = css`
  width: 260px; 
  margin-bottom: 38px;
`

export const RadioButtonGroup = (props) => {

  const { options, onChange, defaultValue = options[0].valueNetwork } = props;

  const handleChange = (event) => {
    const valueRadioGroup = event.currentTarget.value;
    onChange(valueRadioGroup);
  };

  return (
    <FormControl css={wrapperRadioButtonGroup}>
      <RadioGroup 
        onChange={handleChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
        >

        {options.map(({ text, valueNetwork }) => 
          <FormControlLabel key={valueNetwork} value={valueNetwork} control={<Radio icon={<TaskAltOutlinedIcon sx={{ color: '#e1e1e1'}} />} checkedIcon={<TaskAltOutlinedIcon sx={{color: '#d7373b'}} />}    />} label={text} />
        )}

      </RadioGroup>
    </FormControl>
  );
}