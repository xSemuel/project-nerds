/** @jsxImportSource @emotion/react */
import { FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { css } from '@emotion/react'

const titleFilterCost = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
`

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
    <FormGroup css={css` width: 260px; margin-bottom: 38px;`}>
      <Typography variant="h3" css={titleFilterCost}>Особливості:</Typography>
        {options.map(({ text, value }) =>
          <FormControlLabel
            key={value}
            control={<Checkbox onChange={handleChange} value={value} checked={selectedValues.includes(value)} />}
            label={text} 
          />
        )}  

    </FormGroup>
  )
}