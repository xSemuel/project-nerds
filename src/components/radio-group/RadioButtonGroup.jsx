/** @jsxImportSource @emotion/react */
import { Radio, RadioGroup, FormControlLabel, FormControl, Typography } from '@mui/material';
import { css } from '@emotion/react'
import radioButtonOn from './img/radio-on.svg';
import radioButtonOff from './img/radio-off.svg';

const titleFilterCost = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
`

const radioButtonStyle = css`
      color: #444444;
      border: 5px;
      background-image: url(./img/radio-on.svg)
      .checked: {
        color: green;
      }
`

export const RadioButtonGroup = (props) => {

  const { options, onChange, defaultValue = options[0].valueNetwork } = props;

  const handleChange = (event) => {
    const valueRadioGroup = event.currentTarget.value;
    onChange(valueRadioGroup);
  };

  return (
    <FormControl css={css` width: 260px; margin-bottom: 38px;`}>
      <Typography variant="h3" css={titleFilterCost}>Cітка:</Typography>
      <RadioGroup 
        onChange={handleChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
        >

        {options.map(({ text, valueNetwork }) => 
          <FormControlLabel key={valueNetwork} value={valueNetwork} control={<Radio/>} label={text} />
        )}

      </RadioGroup>
    </FormControl>
  );
}