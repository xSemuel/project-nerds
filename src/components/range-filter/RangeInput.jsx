/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

import { TextField } from '@mui/material';

export const RangeInput = (props) => {

    const { value, id, onChange, label, min, max } = props

    return (
        <TextField
            value={value}
            id={id}
            onChange={onChange}
            label={label}
            type="number"
            size="small"
            color="primary"
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                min: {min},
                max: {max},
            }}
        />

    )
}