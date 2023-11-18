import { useState } from 'react';
import TextField from '@mui/material/TextField';

const textNameValidation = [
    'Введіть не менше 4 символів',
]

export const MessageValidation = ({ onValidation, id, name, autoComplete, rows, defaultValue }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(textNameValidation[0]);
  const [error, setError] = useState(true);

    const handleInputChange = (e) => {

        const { id: filterName, value } = e.target

        const requiredSymbol = 30;
        const leftSymbol = requiredSymbol - value.length;

        if (leftSymbol > 0) {
            setError(true)
            setErrorText(`${leftSymbol}textNameValidation[0]`)
        } else {
            setError(false)
            setErrorText('')
        }

        setInputValue(value);
        onValidation(filterName, value, error);       
    };

  return (
        <TextField
            required
            fullWidth
            multiline
            id={id}
            name={name}
            rows={rows}
            hiddenLabel
            autoComplete={autoComplete}
            value={inputValue}
            onChange={handleInputChange}
            error={error}
            helperText={errorText}
        />
    );
};
